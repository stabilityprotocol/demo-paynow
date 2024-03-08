import { Address } from "viem";

export const Contracts: Record<
  string,
  { token: Address; paymentRequests: Address }
> = {
  pyusd: {
    token: "0xeE777d85cCf794EAD7f0d5b4b9Ddb58BEcb9F657",
    paymentRequests: "0x3De081CFae99A2Fa51807864A61e8C1429B1c694",
  },
  bolt: {
    token: "0x98A4cf3e95F80e38922A6D702Ce9Cb8C09fE6439",
    paymentRequests: "0x120D1c2d71DEcf1B1ACd49B8a855e9bb7ff24589",
  },
};

export const EnsContract: Address =
  "0xE1239ce3Ea61B91cC07b0c34A62a05eFe5b561A3";
