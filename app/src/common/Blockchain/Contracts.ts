import { Address } from "viem";

export const Contracts: Record<string, { token: Address; faucet: Address }> = {
  pyusd: {
    token: "0xcfF807fCCEF1275ba56745944001cdfeeF685869",
    faucet: "0x1688501D13EbCb9162a0B730DB45C6491Fa3620c",
  },
};
