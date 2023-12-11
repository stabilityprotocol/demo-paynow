import { useRecoilState } from "recoil";
import { TransferState } from "../../common/State/Transfer";
import {
  AccountLogo,
  AccountName,
  ActionButtonWrapper,
  AddressInformationWrapper,
  AddressSectionTitle,
  AddressSectionWrapper,
  ColouredText,
  LightText,
  TokenBalanceAmount,
  TokenInputWrapper,
  WhiteSendIcon,
  WhiteThunderboltIcon,
} from "./Styles";
import { useTranslation } from "react-i18next";
import { useAppBalance } from "../../common/hooks/useAppBalance";
import { useCallback, useMemo, useState } from "react";
import { TokenAmountInput } from "../../components/TokenAmountInput";
import { useERC20 } from "../../common/hooks/useERC20";
import { ButtonAction } from "../../components/Button";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";

export const AddressSection = () => {
  const [account, setAccount] = useRecoilState(TransferState);
  const theme = useTheme();
  const navigate = useNavigate();
  const { symbol } = useERC20();
  const { t } = useTranslation();

  const { formatted } = useAppBalance();
  const [amount, setAmount] = useState("");

  const enoughBalance = useMemo(() => {
    return Number(formatted) >= Number(amount);
  }, [formatted, amount]);

  const onSend = useCallback(() => {
    setAccount((prev) => ({ ...prev, formattedAmount: amount }));
    navigate("/search/send");
  }, [setAccount, amount, navigate]);

  const onRequest = useCallback(() => {
    setAccount((prev) => ({ ...prev, formattedAmount: amount }));
    navigate("/search/request");
  }, [setAccount, amount, navigate]);

  return (
    <AddressSectionWrapper>
      <AddressSectionTitle>{t("pages.address.title")}</AddressSectionTitle>
      <AddressInformationWrapper>
        <AccountLogo>JS</AccountLogo>
        <AccountName>
          {account.account?.name || account.account?.address}
        </AccountName>
      </AddressInformationWrapper>
      <TokenInputWrapper>
        <TokenAmountInput
          value={amount}
          onChange={(v) => setAmount(v)}
          placeholder={t("pages.address.amount")}
          color={theme.colors.black}
          background={theme.colors.white}
        />
        <TokenBalanceAmount>
          <LightText>{t("pages.address.balance")}: </LightText>
          {enoughBalance ? (
            <ColouredText
              color={theme.colors.black}
            >{` ${formatted} ${symbol}`}</ColouredText>
          ) : (
            <ColouredText color={theme.colors.red1}>
              {t("pages.address.insufficient-funds")}
            </ColouredText>
          )}
        </TokenBalanceAmount>
        <ActionButtonWrapper>
          <ButtonAction onClick={onSend}>
            {t("pages.address.send")}
            <WhiteSendIcon />
          </ButtonAction>
          <ButtonAction onClick={onRequest}>
            {t("pages.address.request")}
            <WhiteThunderboltIcon />
          </ButtonAction>
        </ActionButtonWrapper>
      </TokenInputWrapper>
    </AddressSectionWrapper>
  );
};