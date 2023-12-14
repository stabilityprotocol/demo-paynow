import { atom } from "recoil";
import { TransactionActivityData } from "../models/TransactionActivity";
import { recoilPersist } from "recoil-persist";

export type TUserState = {
  ens?: string | null;
  recentTransactions: { date: string; items: TransactionActivityData[] }[];
};

const { persistAtom } = recoilPersist({});

export const UserState = atom<TUserState>({
  key: "user-state",
  default: {
    recentTransactions: [],
  },
  effects: [persistAtom],
});
