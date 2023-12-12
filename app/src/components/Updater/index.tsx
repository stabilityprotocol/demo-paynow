import { useRecoilState } from "recoil";
import { useInterval } from "usehooks-ts";
import { useAccount } from "wagmi";
import { UserState } from "../../common/State/User";
import { useENS } from "../../common/hooks/useENS";
import { useCallback, useEffect } from "react";
import { watchAccount } from "@wagmi/core";
import { useAddressTransactions } from "../../common/API/Blockscout";
import { useContract } from "../../common/hooks/useContracts";
import { formatActivityData } from "../TransactionActivity/FormatData";

export const Updater = () => {
  const [userState, setUserState] = useRecoilState(UserState);
  const { address } = useAccount();
  const { tokenAddress } = useContract();
  const { getNameByAdress } = useENS();
  const { data, isLoading } = useAddressTransactions(address, tokenAddress);

  const updateEns = useCallback(() => {
    if (!address || typeof userState.ens !== "undefined") return;
    getNameByAdress(address).then((name) => {
      setUserState((prevState) => ({
        ...prevState,
        ens: name ? name : null,
      }));
    });
  }, [address, getNameByAdress, setUserState, userState.ens]);

  useInterval(
    () => {
      updateEns();
    },
    typeof userState.ens === "undefined" ? 10_000 : null
  );

  useEffect(() => {
    updateEns();
  }, [updateEns]);

  const updateRecentTransactions = useCallback(() => {
    if (!data || isLoading) {
      return;
    }

    const recentTransactions = formatActivityData(data);

    setUserState((prevState) => ({
      ...prevState,
      recentTransactions,
    }));
  }, [isLoading, data, setUserState]);

  useInterval(
    () => {
      updateRecentTransactions();
    },
    typeof userState.recentTransactions === "undefined" ? 10_000 : null
  );

  useEffect(() => {
    updateRecentTransactions();
  }, [data, isLoading, updateRecentTransactions]);

  useEffect(() => {
    const unwatch = watchAccount((account) => {
      console.log("Account changed to", account);
      setUserState({});
    });
    return () => unwatch();
  }, [setUserState]);

  return <></>;
};
