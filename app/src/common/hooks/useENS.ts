import { Address, useAccount } from "wagmi";
import { EnsContract } from "../Blockchain/Contracts";
import { EnsABI } from "../ABI/ENS";
import { prepareWriteContract, writeContract, readContract } from "@wagmi/core";

export const useENS = () => {
  const { address } = useAccount();

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

  const getNameByAdress = async (address: Address) => {
    try {
      const data = await readContract({
        address: EnsContract,
        abi: EnsABI,
        functionName: "getNameByAddress",
        args: [address],
      });
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return { claimName, getNameByAdress };
};
