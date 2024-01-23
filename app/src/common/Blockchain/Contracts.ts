import { Address } from "viem";

export const Contracts: Record<
  string,
  { token: Address; paymentRequests: Address }
> = {
  pyusd: {
    token: "0xb253fAA010eC8DfC976232BF20c4fd340740A3Bf",
    paymentRequests: "0xC5C81a0879d5453F5b3c783f9C77FFAdF2F25420",
  },
  usdc: {
    token: "0xcf42D9C47f68d9F7cE5aC3e0675E1c510Cd8b5e9",
    paymentRequests: "0xC7055De33fb64F668d5E2728f50D32cb0cAfD450",
  },
};

export const EnsContract: Address =
  "0xc4D1c939bBD143f12Ad44a69c6B9Ee767eBC2319";
