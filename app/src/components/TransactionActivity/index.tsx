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
  const { recentTransactions } = useRecoilValue(UserState);

  return recentTransactions.length > 0 ? (
    <TransactionActivityWrapper>
      {recentTransactions.map((stack, i) => (
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
  const [displayAddress, setDisplayAddress] = useState<string | undefined>();
  const { getNameByAddress } = useENS();
  const { t } = useTranslation();
  const { address } = useAccount();

  const handleAddress = useCallback(
    async (adress: Address) => {
      const result = await getNameByAddress(adress);
      if (!result || result == "") {
        setDisplayAddress(shortAddress(adress));
      } else {
        setDisplayAddress(result.concat(".stability"));
      }
    },
    [getNameByAddress]
  );

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
          displayAddress: item.from.hash,
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

  useEffect(() => {
    if (displayAddress === undefined) {
      handleAddress(TransactionActivityData.displayAddress as Address);
    }
  }, [TransactionActivityData.displayAddress, displayAddress, handleAddress]);

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
