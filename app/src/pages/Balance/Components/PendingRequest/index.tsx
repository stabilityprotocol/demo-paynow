import { useMemo } from "react";
import { usePaymentRequest } from "../../../../common/hooks/usePaymentRequest";
import {
  RequestAction,
  RequestItemDetail,
  RequestItemDetailAmount,
  RequestItemDetailSubtitle,
  RequestItemDetailTitle,
  RequestItemInfo,
  RequestItemWrapper,
} from "./Styles";
import { useERC20 } from "../../../../common/hooks/useERC20";
import { ButtonSmallAction } from "../../../../components/Button";
import { formatEther } from "viem";
import { shortAddress } from "../../../../common/ETH";
import { PiCoinsFill } from "react-icons/pi";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const PendingRequest = () => {
  const { pendingRequests } = usePaymentRequest();
  const { symbol } = useERC20();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const pending = useMemo(() => {
    if (!pendingRequests || pendingRequests.length === 0) return undefined;
    return pendingRequests[0];
  }, [pendingRequests]);

  return pending ? (
    <RequestItemWrapper>
      <RequestItemInfo>
        <RequestItemDetail>
          <RequestItemDetailTitle>
            <span className="label">
              {t("pages.balance.pendingRequest.title")}
            </span>
            <span className="status">
              {t("pages.balance.pendingRequest.status")}
            </span>
          </RequestItemDetailTitle>
          <RequestItemDetailSubtitle>
            <span className="label">
              {t("pages.balance.pendingRequest.fromLabel")}
            </span>
            <span className="target">{shortAddress(pending.target)}</span>
          </RequestItemDetailSubtitle>
        </RequestItemDetail>
        <RequestItemDetailAmount>
          {formatEther(pending.amount)} {symbol}
        </RequestItemDetailAmount>
      </RequestItemInfo>
      <RequestAction>
        <ButtonSmallAction
          onClick={() => navigate(`/pay-request/${pending.id}`)}
        >
          {t("pages.balance.pendingRequest.actionButton")} <PiCoinsFill />
        </ButtonSmallAction>
      </RequestAction>
    </RequestItemWrapper>
  ) : (
    <span>{/* No pending txns */}</span>
  );
};
