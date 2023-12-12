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
import { useAccount } from "wagmi";
import { TransactionActivityData } from "../../common/models/TransactionActivity";
import { formatUnits } from "ethers";
import { shortAddress } from "../../common/ETH";
import { useENS } from "../../common/hooks/useENS";
import { Address } from "wagmi";
import { useTranslation } from "react-i18next";
import { useRecoilValue } from "recoil";
import { UserState } from "../../common/State/User";
import {
  TransactionActivityStatus,
  TransactionActivityType,
} from "../../common/models/TransactionActivity";

export const TransactionActivity = () => {
  const { address } = useAccount();
  const { activityTransactions } = useRecoilValue(UserState);

  return activityTransactions && address ? (
    <TransactionActivityWrapper>
      {activityTransactions.map(
        (
          stack: { date: string; items: TransactionActivityData[] },
          i: number
        ) => (
          <TransactionActivityStack key={i}>
            <TransactionDate>{stack.date}</TransactionDate>
            {stack.items.map((item: TransactionActivityData, j: number) => (
              <TransactionActivityItem
                key={j}
                type={
                  item.from.hash == address
                    ? TransactionActivityType.SEND
                    : TransactionActivityType.RECEIVE
                }
                item={item}
                status={TransactionActivityStatus.DONE}
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
  item,
}: {
  type: TransactionActivityType;
  status: TransactionActivityStatus;
  item: TransactionActivityData;
}) => {
  const [displayAddress, setDisplayAddress] = useState<string>("");
  const { getNameByAdress } = useENS();
  const { t } = useTranslation();

  const handleAddress = useCallback(
    async (adress: Address) => {
      const result = await getNameByAdress(adress);

      if (!result || result == "") {
        setDisplayAddress(shortAddress(adress));
      } else {
        setDisplayAddress(result.concat(".stability"));
      }
    },
    [getNameByAdress]
  );

  const TransactionActivityData = useMemo(() => {
    switch (type) {
      case "Send":
        return {
          icon: <PiArrowCircleUpRightFill />,
          type: t("pages.activity.transactionTypes.send"),
          displayAddress: item.to.hash,
        };
      case "Receive":
        return {
          icon: <PiArrowCircleDownLeftFill />,
          type: t("pages.activity.transactionTypes.receive"),
          displayAddress: item.from.hash,
        };
      case "Request":
        return {
          icon: <PiLightningFill />,
          type: t("pages.activity.transactionTypes.request"),
          displayAddress: item.from.hash,
        };
      default:
        return {
          icon: <PiArrowCircleUpRightFill />,
          type: t("pages.activity.transactionTypes.send"),
          displayAddress: item.to.hash,
        };
    }
  }, [type, item.from.hash, item.to.hash, t]);

  useEffect(() => {
    handleAddress(TransactionActivityData.displayAddress as Address);
  }, [TransactionActivityData.displayAddress, handleAddress]);

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
          <TransactionOwnerWrapper>{displayAddress}</TransactionOwnerWrapper>
        </TransactionDetailsWrapper>
        <TransactionAmountWrapper>
          <a
            href={t("links.explorerTx", { hash: item.tx_hash })}
            target="_blank"
          >
            {formatUnits(item.total.value, Number(item.token.decimals))}
          </a>
          <span>{item.token.symbol}</span>
        </TransactionAmountWrapper>
      </TransactionDataWrapper>
    </TransactionActivityItemWrapper>
  );
};
