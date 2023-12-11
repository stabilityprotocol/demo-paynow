import { useRecoilState } from "recoil";
import { useInterval } from "usehooks-ts";
import { useAccount } from "wagmi";
import { UserState } from "../../common/State/User";
import { useENS } from "../../common/hooks/useENS";
import { useCallback, useEffect } from "react";

export const Updater = () => {
  const [userState, setUserState] = useRecoilState(UserState);
  const { address } = useAccount();
  const { getNameByAdress } = useENS();

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

  return <></>;
};
