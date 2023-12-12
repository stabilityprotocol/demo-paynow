import { Address, useAccount } from "wagmi";
import { EnsContract } from "../Blockchain/Contracts";
import { EnsABI } from "../ABI/ENS";
import { prepareWriteContract, writeContract, readContract } from "@wagmi/core";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { EnsCacheState } from "../State/EnsCache";

export const useENS = () => {
  const { address } = useAccount();
  const [cache, setCache] = useRecoilState(EnsCacheState);

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

  const getNameByAdress = useCallback(
    async (address: Address) => {
      try {
        if (cache[address]) return cache[address];

        const data = await readContract({
          address: EnsContract,
          abi: EnsABI,
          functionName: "getNameByAddress",
          args: [address],
        });

        setCache((prev) => ({ ...prev, [address]: data }));
        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    [cache, setCache]
  );

  return { claimName, getNameByAdress };
};
