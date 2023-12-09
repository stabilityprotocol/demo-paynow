import { useMemo } from "react";
import { Contracts } from "../Blockchain/Contracts";
import { erc20ABI } from "wagmi";
import { FaucetABI } from "../ABI/Faucet";

export const useContract = () => {
  const tokenAddress = useMemo(() => {
    if (window.location.href.includes("pyusd")) {
      return Contracts["pyusd"]["token"];
    }
    return Contracts["pyusd"]["token"];
  }, []);

  const faucetAddress = useMemo(() => {
    if (window.location.href.includes("pyusd")) {
      return Contracts["pyusd"]["faucet"];
    }
    return Contracts["pyusd"]["faucet"];
  }, []);

  const wagmiTokenParams = useMemo(() => {
    return {
      abi: erc20ABI,
      address: tokenAddress,
    };
  }, [tokenAddress]);

  const wagmiFaucetParams = useMemo(() => {
    return {
      abi: FaucetABI,
      address: faucetAddress,
    };
  }, [faucetAddress]);

  return {
    wagmiFaucetParams,
    wagmiTokenParams,
    tokenAddress,
    faucetAddress,
  };
};
