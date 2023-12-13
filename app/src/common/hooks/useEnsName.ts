import { useEffect, useState } from "react";
import { useENS } from "./useENS";
import { Address } from "viem";

export const useEnsName = (address: Address | undefined) => {
  const [name, setName] = useState<string | undefined>(undefined);
  const { getNameByAddress } = useENS();

  useEffect(() => {
    getNameByAddress(address)
      .then((e) => (e === null ? undefined : e))
      .then(setName);
  }, [address, getNameByAddress]);

  return name;
};
