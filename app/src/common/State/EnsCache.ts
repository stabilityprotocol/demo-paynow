import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

type CacheEntry = {
  value: string;
  expires: number;
};

export type TCacheState = {
  [namespace: string]: { [key: string]: CacheEntry | undefined } | undefined;
};

const { persistAtom } = recoilPersist({});

export const CacheState = atom<TCacheState>({
  key: "cache-state",
  default: {},
  effects: [persistAtom],
});
