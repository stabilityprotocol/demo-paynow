import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

export type TEnsCacheState = Record<string, string>;

const { persistAtom } = recoilPersist({});

export const CacheState = atom<TEnsCacheState>({
  key: "ens-cache-state",
  default: {},
  effects: [persistAtom],
});
