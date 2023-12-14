import { useEffect, useState } from "react";
import { useENS } from "./useENS";
import { Address, isAddress } from "viem";
import { shortAddress } from "../ETH";

export const useEnsName = (address: string | undefined) => {
  const [name, setName] = useState<string | undefined>(undefined);
  const { getNameByAddress } = useENS();

  useEffect(() => {
    if (address && !isAddress(address)) return;
    getNameByAddress(address as Address)
      .then((e) => (e === null ? shortAddress(address as Address) : e))
      .then(setName);
  }, [address, getNameByAddress]);

  return name;
};
