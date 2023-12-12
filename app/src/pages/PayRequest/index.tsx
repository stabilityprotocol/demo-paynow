import { useTranslation } from "react-i18next";
import { Button, ButtonNoFilled } from "../../components/Button";
import { UserIcon } from "../../components/UserIcon";
import {
  AddMemoWrapper,
  AttributeWrapper,
  ButtonWrapper,
  PageTitle,
} from "../Request/Styles";
import { Quantity } from "../Request/components/Quantity";
import { RequestAttribute } from "../Request/components/RequestAttribute";
import { waitForTransaction } from "@wagmi/core";
import { useERC20 } from "../../common/hooks/useERC20";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useMemo, useState } from "react";
import { shortAddress } from "../../common/ETH";
import { usePaymentRequest } from "../../common/hooks/usePaymentRequest";
import { formatEther } from "viem";
import { useENS } from "../../common/hooks/useENS";
import { useAccount } from "wagmi";
import { useAppBalance } from "../../common/hooks/useAppBalance";
import { AddMemo } from "../Request/components/AddMemo";
import { LoadingIcon } from "../../components/LoadingIcon";
import { LoadingIconWrapper } from "./Styles";

export const PayRequest = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const [displayName, setDisplayName] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const { symbol, allowance, approve } = useERC20();
  const navigate = useNavigate();
  const {
    pendingRequests,
    cancelRequest,
    fullfillRequest,
    address: paymentRequestAddress,
  } = usePaymentRequest();
  const { getNameByAddress } = useENS();
  const { address } = useAccount();
  const { value: balance } = useAppBalance();

  const request = useMemo(() => {
    if (!pendingRequests || pendingRequests.length === 0) return undefined;
    return pendingRequests.find((r) => r.id.toString() === id);
  }, [id, pendingRequests]);

  const onConfirm = useCallback(() => {
    if (!request || !address || !balance) return;
    setLoading(true);
    const fn = async () => {
      if (!request) return Promise.reject();
      // check allowance
      const allowanceAmount = await allowance(address, paymentRequestAddress);
      if (allowanceAmount < request.amount) {
        await approve(paymentRequestAddress, balance.toString()).then((hash) =>
          waitForTransaction({ hash })
        );
      }
      return fullfillRequest(request.id).then((hash) =>
        waitForTransaction({ hash })
      );
    };
    fn()
      .then(() => {
        setLoading(false);
        navigate("/balance");
      })
      .catch(() => {
        setLoading(false);
      });
  }, [
    allowance,
    approve,
    fullfillRequest,
    navigate,
    address,
    balance,
    paymentRequestAddress,
    request,
  ]);

  const onReject = useCallback(() => {
    if (!request) return;
    setLoading(true);
    const fn = () => {
      return cancelRequest(request.id).then((hash) =>
        waitForTransaction({ hash })
      );
    };
    fn()
      .then(() => {
        setLoading(false);
        navigate("/balance");
      })
      .catch(() => {
        setLoading(false);
      });
  }, [cancelRequest, navigate, request]);

  useEffect(() => {
    if (!request || !!displayName) return;
    getNameByAddress(request.target).then((name) => {
      setDisplayName(`${name}.stability` ?? shortAddress(request.target));
    });
  }, [displayName, request, getNameByAddress]);

  if (!request)
    return (
      <LoadingIconWrapper>
        <LoadingIcon />
        <div>{t("pages.pay-requests.loading")}</div>
      </LoadingIconWrapper>
    );

  return (
    <>
      <PageTitle>{t("pages.pay-request.title")}</PageTitle>
      <UserIcon
        name={displayName ?? shortAddress(request.target)}
        letters={(displayName ?? request.target).slice(0, 2).toUpperCase()}
      />
      {shortAddress(request.target)}
      <Quantity quantity={formatEther(request.amount)} />
      <AddMemoWrapper>
        <AddMemo value={request.memo} disabled />
      </AddMemoWrapper>
      <AttributeWrapper>
        <RequestAttribute name={t("pages.send.fee")} value={`0 ${symbol}`} />
        <RequestAttribute
          name={t("pages.send.total")}
          value={`${formatEther(request.amount)} ${symbol}`}
        />
        <RequestAttribute
          name={t("pages.send.txn-completed")}
          value={t("pages.send.txn-completed-time")}
        />
      </AttributeWrapper>
      <ButtonWrapper>
        <Button onClick={onConfirm}>
          {loading ? t("pages.send.pending") : t("pages.send.confirm")}
        </Button>
        <ButtonNoFilled onClick={onReject}>
          {t("pages.send.cancel")}
        </ButtonNoFilled>
      </ButtonWrapper>
    </>
  );
};
