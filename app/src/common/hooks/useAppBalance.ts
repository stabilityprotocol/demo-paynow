import { useAccount, useBalance } from "wagmi";
import { useContract } from "./useContracts";

export const useAppBalance = () => {
  const { tokenAddress } = useContract();
  const { address } = useAccount();
  const { data } = useBalance({
    token: tokenAddress,
    address,
    watch: true,
    staleTime: 4_000,
  });
  return { ...data };
};
