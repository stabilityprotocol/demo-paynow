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
import { useMemo } from "react";
import { useAccount } from "wagmi";
import { TransactionActivityData } from "../../common/models/TransactionActivity";
import { formatUnits } from "ethers";
import { shortAddress } from "../../common/ETH";
import { useTranslation } from "react-i18next";
import {
  TransactionActivityStatus,
  TransactionActivityType,
} from "../../common/models/TransactionActivity";
import { useEnsName } from "../../common/hooks/useEnsName";

export const TransactionActivity = ({
  transactions,
}: {
  transactions: { date: string; items: TransactionActivityData[] }[];
}) => {
  return transactions && transactions.length > 0 ? (
    <TransactionActivityWrapper>
      {transactions.map((stack, i) => (
        <TransactionActivityStack key={i}>
          <TransactionDate>{stack.date}</TransactionDate>
          {stack.items.map((item, j) => (
            <TransactionActivityItem key={j} item={item} />
          ))}
        </TransactionActivityStack>
      ))}
    </TransactionActivityWrapper>
  ) : (
    <div>No transactions found</div>
  );
};

const TransactionActivityItem: React.FC<{
  item: TransactionActivityData;
}> = ({ item }) => {
  const { t } = useTranslation();
  const { address } = useAccount();

  const transactionType = useMemo(() => {
    if (!address) return undefined;
    if (item.method === "fulfillRequest") {
      if (item.from.hash === address) {
        return TransactionActivityType.REQUEST;
      }
      return TransactionActivityType.RECEIVE;
    }
    if (item.from.hash === address) {
      return TransactionActivityType.SEND;
    }
    return TransactionActivityType.RECEIVE;
  }, [address, item]);

  const TransactionActivityData = useMemo(() => {
    switch (transactionType) {
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
          displayAddress:
            address == item.from.hash ? item.to.hash : item.from.hash,
        };
      default:
        return {
          icon: <PiArrowCircleUpRightFill />,
          type: t("pages.activity.transactionTypes.send"),
          displayAddress: item.to.hash,
        };
    }
  }, [transactionType, item.from.hash, item.to.hash, t]);

  const status = useMemo(() => TransactionActivityStatus.DONE, []);

  const name = useEnsName(TransactionActivityData.displayAddress);

  const displayAddress = useMemo(
    () =>
      name
        ? `${name}.stability`
        : shortAddress(TransactionActivityData.displayAddress),
    [TransactionActivityData.displayAddress, name]
  );

  return (
    <TransactionActivityItemWrapper>
      <TransactionIconWrapper>
        <IconBubble transactionType={transactionType}>
          {TransactionActivityData.icon}
        </IconBubble>
      </TransactionIconWrapper>
      <TransactionDataWrapper>
        <TransactionDetailsWrapper>
          <TransactionOverviewWrapper>
            <span>{TransactionActivityData.type}</span>
            <StatusBubble status={status}>{status}</StatusBubble>
          </TransactionOverviewWrapper>
          <TransactionOwnerWrapper>
            {transactionType == "Request" &&
              (item.from.hash == address
                ? t("pages.activity.requestFrom")
                : t("pages.activity.requestTo"))}{" "}
            {displayAddress}
          </TransactionOwnerWrapper>
        </TransactionDetailsWrapper>
        <TransactionAmountWrapper>
          <a
            href={t("links.explorerTx", { hash: item.tx_hash })}
            target="_blank"
          >
            {(transactionType == "Send" ||
              (transactionType == "Request" && item.from.hash == address)) && (
              <span>-</span>
            )}
            {(transactionType == "Receive" ||
              (transactionType == "Request" && item.to.hash == address)) && (
              <span>+</span>
            )}
            {formatUnits(item.total.value, Number(item.token.decimals))}
          </a>
          <span>{item.token.symbol}</span>
        </TransactionAmountWrapper>
      </TransactionDataWrapper>
    </TransactionActivityItemWrapper>
  );
};
