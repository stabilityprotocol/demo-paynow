import { useMemo } from "react";
import { Contracts } from "../Blockchain/Contracts";
import { Erc20ABI } from "../ABI/ERC20";
import { PaymentRequestABI } from "../ABI/PaymentRequest";
import { stbleTestnet } from "../Blockchain";

export const useContract = () => {
  const tokenAddress = useMemo(() => {
    if (window.location.href.includes("pyusd")) {
      return Contracts["pyusd"]["token"];
    }
    if (window.location.href.includes("usdc")) {
      return Contracts["usdc"]["token"];
    }
    return Contracts["pyusd"]["token"];
  }, []);

  const paymentRequestsAddress = useMemo(() => {
    if (window.location.href.includes("pyusd")) {
      return Contracts["pyusd"]["paymentRequests"];
    }
    if (window.location.href.includes("usdc")) {
      return Contracts["usdc"]["paymentRequests"];
    }
    return Contracts["pyusd"]["paymentRequests"];
  }, []);

  const wagmiTokenParams = useMemo(() => {
    return {
      abi: Erc20ABI,
      address: tokenAddress,
      chainId: stbleTestnet.id,
    };
  }, [tokenAddress]);

  const wagmiPaymentRequestsParams = useMemo(() => {
    return {
      abi: PaymentRequestABI,
      address: paymentRequestsAddress,
      chainId: stbleTestnet.id,
    };
  }, [paymentRequestsAddress]);

  return {
    tokenAddress,
    paymentRequestsAddress,
    wagmiTokenParams,
    wagmiPaymentRequestsParams,
  };
};
