import { useRecoilState } from "recoil";
import { UserState } from "../State/User";
import { useCallback } from "react";
import { useAddressTransactions } from "../API/Blockscout";
import { useAccount } from "wagmi";
import { useContract } from "./useContracts";
import { TransactionActivityData } from "../models/TransactionActivity";
import { useInterval } from "usehooks-ts";

export const useFetchRecentTransactions = () => {
  const [userState, setUserState] = useRecoilState(UserState);
  const { address } = useAccount();
  const { tokenAddress } = useContract();
  const { data, isLoading, isError } = useAddressTransactions(
    address,
    tokenAddress
  );

  const formatActivityData = (data: {
    items: TransactionActivityData[];
  }): { date: string; items: TransactionActivityData[] }[] => {
    const groupedItems = data.items.reduce(
      (
        acc: { [key: string]: TransactionActivityData[] },
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
      {} as { [key: string]: TransactionActivityData[] }
    );

    return Object.entries(groupedItems).map(([date, items]) => ({
      date,
      items: items as TransactionActivityData[],
    }));
  };

  const updateRecentTransactions = useCallback(() => {
    if (!data || isLoading) {
      return;
    }

    if (isError) {
      console.error("Error fetching recent transactions: ", isError);
      return;
    }

    const recentTransactions = formatActivityData(data);

    setUserState((prevState) => ({
      ...prevState,
      recentTransactions,
    }));
  }, [isLoading, isError, data, setUserState]);

  useInterval(
    () => {
      updateRecentTransactions();
    },
    typeof userState.recentTransactions === "undefined" ? 10_000 : null
  );

  return { updateRecentTransactions };
};
