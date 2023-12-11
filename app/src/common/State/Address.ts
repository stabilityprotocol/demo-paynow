import { atom } from "recoil";
import { Address } from "viem";

export type TAccountState = {
  account?: { name?: string; address: Address };
};

export const AccountState = atom<TAccountState>({
  key: "account-state",
  default: {},
});
