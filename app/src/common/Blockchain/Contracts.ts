import { Address } from "viem";

export const Contracts: Record<string, { token: Address; faucet: Address }> = {
  pyusd: {
    token: "0xc266B0fca9C232811956CE4cd1fF90EFcdF44185",
    faucet: "0x6106E403Bc358E4caBD3F64CA3bC78A74A079bdd",
  },
};

export const EnsContract: Address =
  "0x75015963F12e9EDeDcBbd28EfdF75AF4C5FB9d82";
