import { Address } from "viem";

export const Contracts: Record<string, { token: Address }> = {
  pyusd: {
    token: "0xb253fAA010eC8DfC976232BF20c4fd340740A3Bf",
  },
  paymentRequest: {
    token: "0xC5C81a0879d5453F5b3c783f9C77FFAdF2F25420"
  },
};

export const EnsContract: Address =
  "0xc4D1c939bBD143f12Ad44a69c6B9Ee767eBC2319";
