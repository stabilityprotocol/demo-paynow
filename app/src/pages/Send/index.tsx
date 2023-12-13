import { useTranslation } from "react-i18next";
import { Button, ButtonNoFilled } from "../../components/Button";
import { UserIcon } from "../../components/UserIcon";
import { AttributeWrapper, ButtonWrapper, PageTitle } from "../Request/Styles";
import { Quantity } from "../Request/components/Quantity";
import { RequestAttribute } from "../Request/components/RequestAttribute";
import { waitForTransaction } from "@wagmi/core";
import { TransferState } from "../../common/State/Transfer";
import { useRecoilValue } from "recoil";
import { useERC20 } from "../../common/hooks/useERC20";
import { useNavigate } from "react-router-dom";
import { useCallback, useMemo, useState } from "react";
import { shortAddress } from "../../common/ETH";
import { parseUnits } from "ethers";
import { SendWrapper } from "./Styles";

export const Send = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const { symbol, transfer, decimals } = useERC20();
  const navigate = useNavigate();
  const transferState = useRecoilValue(TransferState);

  if (!transferState.account || !transferState.formattedAmount) {
    // If the user dont follow the flow, redirect to the balance page
    navigate("/balance");
    return null;
  }

  const onSend = useCallback(() => {
    const amount = parseUnits(
      transferState.formattedAmount!,
      decimals
    ).toString();

    setLoading(true);

    transfer(transferState.account!.address, amount)
      .then((hash) => waitForTransaction({ hash, timeout: 30_000 }))
      .then(() => navigate("/"))
      .catch(() => {
        setLoading(false);
      });
  }, [
    decimals,
    navigate,
    transfer,
    transferState.account,
    transferState.formattedAmount,
  ]);

  const displayName = useMemo(() => {
    return transferState.account?.name
      ? `${transferState.account.name}.stability`
      : shortAddress(transferState.account!.address);
  }, [transferState]);

  return (
    <>
      <SendWrapper>
        <PageTitle>{t("pages.send.title")}</PageTitle>
        <UserIcon
          name={displayName}
          letters={displayName.slice(0, 2).toUpperCase()}
        />
        {transferState.account?.name &&
          shortAddress(transferState.account!.address)}
        <Quantity quantity={transferState.formattedAmount ?? "0"} />
        <AttributeWrapper>
          <RequestAttribute name={t("pages.send.fee")} value={`0 ${symbol}`} />
          <RequestAttribute
            name={t("pages.send.total")}
            value={`${transferState.formattedAmount} ${symbol}`}
          />
          <RequestAttribute
            name={t("pages.send.txn-completed")}
            value={t("pages.send.txn-completed-time")}
          />
        </AttributeWrapper>

        <ButtonWrapper>
          <Button onClick={onSend}>
            {loading ? t("pages.send.pending") : t("pages.send.confirm")}
          </Button>
          <ButtonNoFilled onClick={() => navigate(-1)}>
            {t("pages.send.cancel")}
          </ButtonNoFilled>
        </ButtonWrapper>
      </SendWrapper>
    </>
  );
};
