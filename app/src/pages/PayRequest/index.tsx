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
import { useCallback, useMemo, useState } from "react";
import { shortAddress } from "../../common/ETH";
import { usePaymentRequest } from "../../common/hooks/usePaymentRequest";
import { formatEther } from "viem";
import { useAccount } from "wagmi";
import { useAppBalance } from "../../common/hooks/useAppBalance";
import { AddMemo } from "../Request/components/AddMemo";
import { LoadingIcon } from "../../components/LoadingIcon";
import { LoadingIconWrapper, PayRequestWrapper } from "./Styles";
import { getUsernameInitials } from "../../common/Utils";
import { useEnsName } from "../../common/hooks/useEnsName";
import { toast } from "react-toastify";

export const PayRequest = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const [loading, setLoading] = useState<
    "confirming" | "rejecting" | undefined
  >();
  const { symbol, allowance, approve } = useERC20();
  const navigate = useNavigate();
  const {
    pendingRequests,
    cancelRequest,
    fullfillRequest,
    address: paymentRequestAddress,
  } = usePaymentRequest();
  const { address } = useAccount();
  const { value: balance } = useAppBalance();

  const request = useMemo(() => {
    if (!pendingRequests || pendingRequests.length === 0) return undefined;
    return pendingRequests.find((r) => r.id.toString() === id);
  }, [id, pendingRequests]);

  const onConfirm = useCallback(() => {
    if (!request || !address || !balance) return;
    setLoading("confirming");
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
        setLoading(undefined);
        navigate("/balance");
      })
      .catch(() => {
        toast.error(t("pages.pay-request.errorPaying"));
        setLoading(undefined);
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
    setLoading("rejecting");
    const fn = () => {
      return cancelRequest(request.id).then((hash) =>
        waitForTransaction({ hash })
      );
    };
    fn()
      .then(() => {
        setLoading(undefined);
        navigate("/balance");
      })
      .catch(() => {
        toast.error(t("pages.pay-request.errorRejecting"));
        setLoading(undefined);
      });
  }, [cancelRequest, navigate, request]);

  const displayName = useEnsName(request?.target);

  if (!request)
    return (
      <LoadingIconWrapper>
        <LoadingIcon />
        <div>{t("pages.pay-request.loading")}</div>
      </LoadingIconWrapper>
    );

  return (
    <PayRequestWrapper>
      <PageTitle>{t("pages.pay-request.title")}</PageTitle>
      <div>
        <UserIcon
          name={displayName ?? shortAddress(request.target)}
          letters={getUsernameInitials(displayName)}
        />
        {shortAddress(request.target)}
        <Quantity quantity={formatEther(request.amount)} />
      </div>
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
          {loading === "confirming" ? (
            <>
              {t("pages.send.pending")} <LoadingIcon />
            </>
          ) : (
            t("pages.send.confirm")
          )}
        </Button>
        <ButtonNoFilled onClick={onReject}>
          {loading === "rejecting" ? (
            <>
              {t("pages.pay-request.rejecting")} <LoadingIcon />
            </>
          ) : (
            t("pages.pay-request.reject")
          )}
        </ButtonNoFilled>
      </ButtonWrapper>
    </PayRequestWrapper>
  );
};
