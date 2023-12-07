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

export type TransactionActivityType = "Send" | "Receive" | "Request";
export type TransactionActivityStatus = "Done" | "Pending" | "Error";

import {
  PiArrowCircleDownLeftFill,
  PiArrowCircleUpRightFill,
  PiLightningFill,
} from "react-icons/pi";

import { useMemo } from "react";

export const TransactionActivity = () => {
  return (
    <TransactionActivityWrapper>
      <TransactionActivityStack>
        <TransactionDate>11/10/2023</TransactionDate>
        <TransactionActivityItem type="Send" status="Done" />
        <TransactionActivityItem type="Receive" status="Pending" />
        <TransactionActivityItem type="Request" status="Error" />
        <TransactionActivityItem type="Send" status="Done" />
      </TransactionActivityStack>
      <TransactionActivityStack>
        <TransactionDate>11/10/2023</TransactionDate>
        <TransactionActivityItem type="Send" status="Done" />
        <TransactionActivityItem type="Receive" status="Pending" />
        <TransactionActivityItem type="Request" status="Error" />
      </TransactionActivityStack>
      <TransactionActivityStack>
        <TransactionDate>11/10/2023</TransactionDate>
        <TransactionActivityItem type="Send" status="Done" />
        <TransactionActivityItem type="Receive" status="Pending" />
        <TransactionActivityItem type="Request" status="Error" />
      </TransactionActivityStack>
    </TransactionActivityWrapper>
  );
};

const TransactionActivityItem = ({
  type,
  status,
}: {
  type: TransactionActivityType;
  status: TransactionActivityStatus;
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
            <p>{TransactionActivityData.type}</p>
            <StatusBubble status={status}>{status}</StatusBubble>
          </TransactionOverviewWrapper>
          <TransactionOwnerWrapper>
            oscar.martinez.stability
          </TransactionOwnerWrapper>
        </TransactionDetailsWrapper>
        <TransactionAmountWrapper>
          <a href="https://stability-testnet.blockscout.com/" target="_blank">
            0.00001
          </a>
          <p>PyUSD</p>
        </TransactionAmountWrapper>
      </TransactionDataWrapper>
    </TransactionActivityItemWrapper>
  );
};
