import {
  prepareWriteContract,
  writeContract,
  readContract,
  Address,
} from "@wagmi/core";
import { useContract } from "./useContracts";
import { useAccount, useContractRead } from "wagmi";
import { useMemo } from "react";

export const usePaymentRequest = () => {
  const { wagmiPaymentRequestsParams } = useContract();
  const { address } = useAccount();

  const { data: requestsToMe } = useContractRead({
    ...wagmiPaymentRequestsParams,
    functionName: "getRequestsToMe",
    staleTime: 5_000,
    account: address,
    watch: true,
  });

  const pendingRequests = useMemo(() => {
    if (!requestsToMe) return [];
    return requestsToMe.filter((request) => request.state === 0);
  }, [requestsToMe]);

  const createRequest = async (
    target: Address,
    amount: string,
    memo: string
  ) => {
    try {
      const { request } = await prepareWriteContract({
        ...wagmiPaymentRequestsParams,
        functionName: "createRequest",
        args: [target, BigInt(amount), memo],
      });
      const { hash } = await writeContract(request);
      return hash;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const fullfillRequest = async (requestId: bigint) => {
    try {
      const { request } = await prepareWriteContract({
        ...wagmiPaymentRequestsParams,
        functionName: "fulfillRequest",
        args: [requestId],
      });
      const { hash } = await writeContract(request);
      return hash;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const cancelRequest = async (requestId: bigint) => {
    try {
      const { request } = await prepareWriteContract({
        ...wagmiPaymentRequestsParams,
        functionName: "cancelRequest",
        args: [requestId],
      });
      const { hash } = await writeContract(request);
      return hash;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const getRequestsToMe = async () => {
    try {
      const data = await readContract({
        ...wagmiPaymentRequestsParams,
        functionName: "getRequestsToMe",
      });
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return {
    address: wagmiPaymentRequestsParams.address,
    requestsToMe,
    pendingRequests,
    createRequest,
    getRequestsToMe,
    fullfillRequest,
    cancelRequest,
  };
};
