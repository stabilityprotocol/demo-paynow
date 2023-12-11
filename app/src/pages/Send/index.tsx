import { useTranslation } from "react-i18next";
import { Button, ButtonNoFilled } from "../../components/Button";
import { UserIcon } from "../../components/UserIcon";
import { AttributeWrapper, ButtonWrapper, PageTitle } from "../Request/Styles";
import { Quantity } from "../Request/components/Quantity";
import { RequestAttribute } from "../Request/components/RequestAttribute";
import { TransferState } from "../../common/State/Transfer";
import { useRecoilValue } from "recoil";
import { useERC20 } from "../../common/hooks/useERC20";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { shortAddress } from "../../common/ETH";

export const Send = () => {
  const { t } = useTranslation();
  const { symbol } = useERC20();
  const navigate = useNavigate();
  const transfer = useRecoilValue(TransferState);

  const displayName = useMemo(() => {
    return transfer.account?.name || shortAddress(transfer.account!.address);
  }, [transfer]);

  return (
    <>
      <PageTitle>{t("pages.send.title")}</PageTitle>
      <UserIcon name={displayName} letters={displayName.slice(0, 2)} />
      <Quantity quantity={parseFloat(transfer.formattedAmount!)} />
      <AttributeWrapper>
        <RequestAttribute name={t("pages.send.fee")} value={`0 ${symbol}`} />
        <RequestAttribute
          name={t("pages.send.total")}
          value={`${transfer.formattedAmount} ${symbol}`}
        />
        <RequestAttribute
          name={t("pages.send.txn-completed")}
          value="In Seconds"
        />
      </AttributeWrapper>

      <ButtonWrapper>
        <Button>{t("pages.send.confirm")}</Button>
        <ButtonNoFilled onClick={() => navigate(-1)}>
          {t("pages.send.cancel")}
        </ButtonNoFilled>
      </ButtonWrapper>
    </>
  );
};
