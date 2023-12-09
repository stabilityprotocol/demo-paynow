import { Address, useToken } from "wagmi";
import { prepareWriteContract, writeContract, readContract } from "@wagmi/core";
import { useContract } from "./useContracts";

export const useERC20 = () => {
  const { tokenAddress, wagmiTokenParams } = useContract();
  const { data } = useToken({
    address: tokenAddress,
    staleTime: Infinity,
    cacheTime: 100_000,
    scopeKey: `useERC20-${tokenAddress}`,
  });

  const transfer = async (to: Address, amount: string) => {
    try {
      const { request } = await prepareWriteContract({
        ...wagmiTokenParams,
        functionName: "transfer",
        args: [to, BigInt(amount)],
      });
      const { hash } = await writeContract(request);
      return hash;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const transferFrom = async (from: Address, to: Address, amount: string) => {
    try {
      const { request } = await prepareWriteContract({
        ...wagmiTokenParams,
        functionName: "transferFrom",
        args: [from, to, BigInt(amount)],
      });
      const { hash } = await writeContract(request);
      return hash;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const approve = async (spender: Address, amount: string) => {
    try {
      const { request } = await prepareWriteContract({
        ...wagmiTokenParams,
        functionName: "approve",
        args: [spender, BigInt(amount)],
      });
      const { hash } = await writeContract(request);
      return hash;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const allowance = async (owner: Address, spender: Address) => {
    try {
      const data = await readContract({
        ...wagmiTokenParams,
        functionName: "allowance",
        args: [owner, spender],
      });
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return {
    ...data,
    allowance,
    approve,
    transferFrom,
    transfer,
  };
};
