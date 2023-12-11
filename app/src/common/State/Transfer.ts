import { atom } from "recoil";
import { Address } from "viem";

export type TTransferState = {
  account?: { name?: string; address: Address };
  formattedAmount?: string;
};

export const TransferState = atom<TTransferState>({
  key: "transfer-state",
  default: {},
});
