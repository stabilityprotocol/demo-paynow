import { TransactionActivityData } from "../../common/models/TransactionActivity";

const groupPerDay = (data: {
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

export const formatActivityData = (data: {
  items: TransactionActivityData[];
}) => {
  const groupedItems = groupPerDay(data);

  return groupedItems;
};
