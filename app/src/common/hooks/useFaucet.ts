import { useContract } from "./useContracts";
import { prepareWriteContract, writeContract } from "@wagmi/core";

export const useFaucet = () => {
  const { wagmiFaucetParams } = useContract();

  const getTokens = async () => {
    try {
      const { request } = await prepareWriteContract({
        ...wagmiFaucetParams,
        functionName: "getTokens",
      });
      const { hash } = await writeContract(request);
      return hash;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return { getTokens };
};
