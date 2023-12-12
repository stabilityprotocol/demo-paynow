import { useRecoilState } from "recoil";
import { UserState } from "../State/User";
import { useEffect } from "react";
import { useAddressTransactions } from "../API/Blockscout";
import { useAccount } from "wagmi";
import { useContract } from "./useContracts";
import { TransactionActivityData } from "../models/TransactionActivity";

export const useFetchRecentTransactions = () => {
  const [, setUserState] = useRecoilState(UserState);
  const { address } = useAccount();
  const { tokenAddress } = useContract();
  const { data, mutate } = useAddressTransactions(address, tokenAddress);

  const formatActivityData = (data: {
    items: TransactionActivityData[];
  }): { date: string; items: TransactionActivityData[] }[] => {
    const groupedItems = data.items.reduce(
      (
        acc: { [date: string]: TransactionActivityData[] },
        item: TransactionActivityData
      ) => {
        const date = new Date(item.timestamp);
        const formattedDate = `${date.getDate()}/${
          date.getMonth() + 1
        }/${date.getFullYear()}`;

        if (!acc[formattedDate]) {
          acc[formattedDate] = [];
        }
        acc[formattedDate].push(item);

        return acc;
      },
      {}
    );

    return Object.entries(groupedItems).map(([date, items]) => ({
      date,
      items: items as TransactionActivityData[],
    }));
  };

  useEffect(() => {
    if (!data || !data.items) {
      return;
    }
    const recentTransactions = formatActivityData({ items: [], ...data });
    setUserState((prevState) => ({
      ...prevState,
      recentTransactions,
    }));
  }, [data, setUserState]);

  return { refetch: mutate };
};
