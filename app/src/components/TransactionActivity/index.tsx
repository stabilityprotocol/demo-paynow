import {
  TransactionActivityWrapper,
  TransactionActivityItemWrapper,
  TransactionActivityStack,
  TransactionDate,
  TransactionIconWrapper,
  IconBubble,
  TransactionDataWrapper,
  TransactionDetailsWrapper,
  TransactionAmountWrapper,
  TransactionOverviewWrapper,
  TransactionOwnerWrapper,
  StatusBubble,
} from "./Styles";

import {
  PiArrowCircleDownLeftFill,
  PiArrowCircleUpRightFill,
  PiLightningFill,
} from "react-icons/pi";

import { useMemo, useEffect, useCallback, useState } from "react";
import { useAddressTransactions } from "../../common/API/Blockscout";
import { useContract } from "../../common/hooks/useContracts";
import { useAccount } from "wagmi";
import { formatActivityData } from "./FormatData";
import { TransactionActivityData } from "../../common/API/Blockscout";
import { formatUnits } from "ethers";
import { shortAddress } from "../../common/ETH";

export type TransactionActivityType = "Send" | "Receive" | "Request";
export type TransactionActivityStatus = "Done" | "Pending" | "Error";

export const TransactionActivity = () => {
  const { tokenAddress } = useContract();
  const { address } = useAccount();
  const [activityData, setActivityData] =
    useState<{ date: string; items: TransactionActivityData[] }[]>();
  const { data, isLoading, isError } = useAddressTransactions(
    address || "0x",
    tokenAddress
  );

  const onInit = useCallback(async () => {
    if (isLoading || isError) return;

    if (!data) return;

    setActivityData(formatActivityData(data));
  }, [isLoading, isError, data]);

  useEffect(() => {
    onInit();
  }, [onInit, data, isLoading, isError, address]);

  return activityData && address ? (
    <TransactionActivityWrapper>
      {activityData.map(
        (
          stack: { date: string; items: TransactionActivityData[] },
          i: number
        ) => (
          <TransactionActivityStack key={i}>
            <TransactionDate>{stack.date}</TransactionDate>
            {stack.items.map((item: TransactionActivityData, j: number) => (
              <TransactionActivityItem
                key={j}
                type={item.from.hash == address ? "Send" : "Receive"}
                status="Done"
                amount={formatUnits(
                  item.total.value,
                  Number(item.token.decimals)
                )}
                tokenSymbol={item.token.symbol}
                address={address}
              />
            ))}
          </TransactionActivityStack>
        )
      )}
    </TransactionActivityWrapper>
  ) : null;
};

const TransactionActivityItem = ({
  type,
  status,
  amount,
  tokenSymbol,
  address,
}: {
  type: TransactionActivityType;
  status: TransactionActivityStatus;
  amount: string;
  tokenSymbol: string;
  address: string;
}) => {
  const TransactionActivityData = useMemo(() => {
    switch (type) {
      case "Send":
        return {
          icon: <PiArrowCircleUpRightFill />,
          type: "Send",
        };
      case "Receive":
        return {
          icon: <PiArrowCircleDownLeftFill />,
          type: "Receive",
        };
      case "Request":
        return {
          icon: <PiLightningFill />,
          type: "Request",
        };
      default:
        return {
          icon: <PiArrowCircleUpRightFill />,
          type: "Send",
        };
    }
  }, [type]);

  return (
    <TransactionActivityItemWrapper>
      <TransactionIconWrapper>
        <IconBubble status={status}>{TransactionActivityData.icon}</IconBubble>
      </TransactionIconWrapper>
      <TransactionDataWrapper>
        <TransactionDetailsWrapper>
          <TransactionOverviewWrapper>
            <span>{TransactionActivityData.type}</span>
            <StatusBubble status={status}>{status}</StatusBubble>
          </TransactionOverviewWrapper>
          <TransactionOwnerWrapper>
            {shortAddress(address)}
          </TransactionOwnerWrapper>
        </TransactionDetailsWrapper>
        <TransactionAmountWrapper>
          <a href="https://stability-testnet.blockscout.com/" target="_blank">
            {amount}
          </a>
          <span>{tokenSymbol}</span>
        </TransactionAmountWrapper>
      </TransactionDataWrapper>
    </TransactionActivityItemWrapper>
  );
};
