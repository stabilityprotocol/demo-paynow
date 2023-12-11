import { Contracts } from "../Blockchain/Contracts";
import { PaymentRequestABI } from "../ABI/PaymentRequest";
import { prepareWriteContract, writeContract, Address } from "@wagmi/core";

export const usePaymentRequest = () => {

    const createRequest = async (target: Address, amount: string, memo: string) => {
        try {
            const { request } = await prepareWriteContract({
              address:  Contracts["paymentRequest"]["token"],
              abi: PaymentRequestABI,
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

    return { createRequest };
};