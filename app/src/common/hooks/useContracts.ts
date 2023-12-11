import { useMemo } from "react";
import { Contracts } from "../Blockchain/Contracts";
import { Erc20ABI } from "../ABI/ERC20";

export const useContract = () => {
  const tokenAddress = useMemo(() => {
    if (window.location.href.includes("pyusd")) {
      return Contracts["pyusd"]["token"];
    }
    return Contracts["pyusd"]["token"];
  }, []);

  const wagmiTokenParams = useMemo(() => {
    return {
      abi: Erc20ABI,
      address: tokenAddress,
    };
  }, [tokenAddress]);

  return {
    wagmiTokenParams,
    tokenAddress,
  };
};
