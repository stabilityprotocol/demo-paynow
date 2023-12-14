import { useEffect, useState } from "react";
import { useENS } from "./useENS";
import { Address, isAddress } from "viem";

export const useEnsName = (address: string | undefined) => {
  const [name, setName] = useState<string | null>(null);
  const { getNameByAddress } = useENS();

  useEffect(() => {
    if (address && !isAddress(address)) return;
    getNameByAddress(address as Address).then(setName);
  }, [address, getNameByAddress]);

  return name;
};
