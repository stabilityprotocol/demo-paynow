import { useRecoilState } from "recoil";
import { useInterval } from "usehooks-ts";
import { useAccount } from "wagmi";
import { UserState } from "../../common/State/User";
import { useENS } from "../../common/hooks/useENS";
import { useCallback, useEffect } from "react";
import { watchAccount } from "@wagmi/core";
import { useFetchRecentTransactions } from "../../common/hooks/useFetchRecentTransactions";
import { useCacheClearer } from "../../common/hooks/useCacheClearer";

export const Updater = () => {
  const [userState, setUserState] = useRecoilState(UserState);
  const { address } = useAccount();
  const { getNameByAddress } = useENS();
  const { refetch } = useFetchRecentTransactions();
  useCacheClearer();

  const updateEns = useCallback(() => {
    if (!address || typeof userState.ens !== "undefined") return;
    getNameByAddress(address).then((name) => {
      setUserState((prevState) => ({
        ...prevState,
        ens: name ? name : null,
      }));
    });
  }, [address, getNameByAddress, setUserState, userState.ens]);

  useInterval(
    () => {
      updateEns();
    },
    typeof userState.ens === "undefined" ? 10_000 : null
  );

  useEffect(() => {
    updateEns();
  }, [updateEns]);

  useInterval(() => refetch(), address ? 5_000 : null);

  useEffect(() => {
    const unwatch = watchAccount((account) => {
      console.warn("Account changed to", account?.address);
      setUserState({
        recentTransactions: [],
      });
    });
    return () => unwatch();
  }, [setUserState]);

  return <></>;
};
