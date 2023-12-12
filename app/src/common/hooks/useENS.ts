import { Address, useAccount } from "wagmi";
import { EnsContract } from "../Blockchain/Contracts";
import { EnsABI } from "../ABI/ENS";
import { prepareWriteContract, writeContract, readContract } from "@wagmi/core";
import { useCallback } from "react";
import { useCache } from "./useCache";

const ONE_DAY_IN_SECONDS = 60 * 60 * 24;

export const useENS = () => {
  const { address } = useAccount();
  const { has, get, set } = useCache("ens-address-cache");

  const claimName = async (name: string) => {
    try {
      if (!address) throw new Error("No address");
      const { request } = await prepareWriteContract({
        address: EnsContract,
        abi: EnsABI,
        functionName: "setName",
        args: [name, address],
      });
      const { hash } = await writeContract(request);
      return hash;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const getNameByAddress = useCallback(
    async (address: Address) => {
      try {
        if (has(address)) return get(address);

        const data = await readContract({
          address: EnsContract,
          abi: EnsABI,
          functionName: "getNameByAddress",
          args: [address],
        });

        set(address, data, ONE_DAY_IN_SECONDS);
        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    [get, has, set]
  );

  return { claimName, getNameByAddress };
};
