import { atom } from "recoil";
import { TransactionActivityData } from "../models/TransactionActivity";

export type TUserState = {
  ens?: string | null;
  recentTransactions: { date: string; items: TransactionActivityData[] }[];
};

export const UserState = atom<TUserState>({
  key: "user-state",
  default: {
    recentTransactions: [],
  },
});
