import { Address } from "viem";

export const Contracts: Record<
  string,
  { token: Address; paymentRequests: Address }
> = {
  pyusd: {
    token: "0xb253fAA010eC8DfC976232BF20c4fd340740A3Bf",
    paymentRequests: "0xC5C81a0879d5453F5b3c783f9C77FFAdF2F25420",
  },
  bolt: {
    token: "0x98A4cf3e95F80e38922A6D702Ce9Cb8C09fE6439",
    paymentRequests: "0x120D1c2d71DEcf1B1ACd49B8a855e9bb7ff24589",
  },
};

export const EnsContract: Address =
  "0xc4D1c939bBD143f12Ad44a69c6B9Ee767eBC2319";
