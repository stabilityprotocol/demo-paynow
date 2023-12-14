import { useCallback, useState } from "react";
import { useERC20 } from "../../common/hooks/useERC20";
import { ButtonSmallAction } from "../../components/Button";
import { waitForTransaction } from "@wagmi/core";
import {
  AddMoneyAction,
  AddMoneyBody,
  AddMoneyContainer,
  AddMoneyLoading,
  AddMoneyTitle,
  AddMoneyWrapper,
} from "./Styles";
import { useAppBalance } from "../../common/hooks/useAppBalance";
import { Navigate } from "react-router-dom";
import { LoadingIcon } from "../../components/LoadingIcon";
import { useTranslation } from "react-i18next";
import { useAccount } from "wagmi";
import { parseEther } from "viem";
import { toast } from "react-toastify";

export const AddMoney = () => {
  const { address } = useAccount();
  const { t } = useTranslation();
  const { symbol } = useERC20();
  const { value } = useAppBalance();
  const { mint } = useERC20();
  const [claiming, setClaiming] = useState<"sent" | "success" | undefined>();

  const onClaim = useCallback(() => {
    if (!address) return;
    const fn = () => {
      const p = mint(address, randomEtherAmount(1000, 9999));
      p.then((hash) => {
        waitForTransaction({ hash, timeout: 30_000 }).then(() => {
          setClaiming("success");
        });
      });
      return p;
    };
    fn().catch((err) => {
      console.error(err);
      toast.error(t("pages.add-money.error", { symbol }));
      setClaiming(undefined);
    });
    setClaiming("sent");
  }, [address, mint, symbol, t]);

  if ((value && value > 0n && !!claiming) || claiming === "success") {
    return <Navigate to="/" />;
  }

  if (value && value > 0n && !claiming) {
    return <Navigate to="/add-money/come-later" replace />;
  }

  return (
    <AddMoneyWrapper>
      <AddMoneyContainer>
        <AddMoneyTitle>{t("pages.add-money.title")}</AddMoneyTitle>
        <AddMoneyBody>
          {t("pages.add-money.description", { symbol })}
        </AddMoneyBody>
        {claiming === "sent" && (
          <AddMoneyLoading>
            <LoadingIcon />
          </AddMoneyLoading>
        )}
        {!claiming && (
          <AddMoneyAction>
            <ButtonSmallAction onClick={onClaim}>
              {t("pages.add-money.button")}
            </ButtonSmallAction>
          </AddMoneyAction>
        )}
      </AddMoneyContainer>
    </AddMoneyWrapper>
  );
};

function randomEtherAmount(min: number, max: number): string {
  return parseEther(
    BigInt(Math.floor(Math.random() * (max - min + 1) + min)).toString()
  ).toString();
}
