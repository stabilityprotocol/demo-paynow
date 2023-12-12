import { useAccount, useBalance } from "wagmi";
import { useContract } from "./useContracts";
import { useMemo } from "react";

export const useAppBalance = () => {
  const { tokenAddress } = useContract();
  const { address } = useAccount();
  const { data } = useBalance({
    token: tokenAddress,
    address,
    watch: true,
    staleTime: 4_000,
  });

  const normalizedBalance = useMemo(() => {
    if (!data) return "0";
    const match = (data.formatted ?? "0").match(/(\d*\.?(\d{6}))/g);
    if (!match) return data.formatted;
    return match[0];
  }, [data]);

  return { ...data, formatted: normalizedBalance };
};
