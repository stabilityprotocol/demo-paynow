import { atom } from "recoil";

export type TUserState = { ens?: string | null };

export const UserState = atom<TUserState>({
  key: "user-state",
  default: {},
});
