import { useMemo } from "react";
import { Contracts } from "../Blockchain/Contracts";
import { Erc20ABI } from "../ABI/ERC20";
import { PaymentRequestABI } from "../ABI/PaymentRequest";

export const useContract = () => {
  const tokenAddress = useMemo(() => {
    if (window.location.href.includes("pyusd")) {
      return Contracts["pyusd"]["token"];
    }
    return Contracts["pyusd"]["token"];
  }, []);

  const paymentRequestsAddress = useMemo(() => {
    if (window.location.href.includes("pyusd")) {
      return Contracts["pyusd"]["paymentRequests"];
    }
    return Contracts["pyusd"]["paymentRequests"];
  }, []);

  const wagmiTokenParams = useMemo(() => {
    return {
      abi: Erc20ABI,
      address: tokenAddress,
    };
  }, [tokenAddress]);

  const wagmiPaymentRequestsParams = useMemo(() => {
    return {
      abi: PaymentRequestABI,
      address: paymentRequestsAddress,
    };
  }, [paymentRequestsAddress]);

  return {
    tokenAddress,
    paymentRequestsAddress,
    wagmiTokenParams,
    wagmiPaymentRequestsParams,
  };
};
