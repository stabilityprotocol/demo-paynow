import { useERC20 } from "../../common/hooks/useERC20";
import { ButtonSmallAction } from "../../components/Button";
import {
  AddMoneyAction,
  AddMoneyBody,
  AddMoneyContainer,
  AddMoneyTitle,
  AddMoneyWrapper,
} from "./Styles";
import { useAppBalance } from "../../common/hooks/useAppBalance";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const ComeLater = () => {
  const { symbol } = useERC20();
  const navigate = useNavigate();
  const { formatted } = useAppBalance();
  const { t } = useTranslation();

  return (
    <AddMoneyWrapper>
      <AddMoneyContainer>
        <AddMoneyTitle>{t("pages.add-money.come-later.title")}</AddMoneyTitle>
        <AddMoneyBody>
          {t("pages.add-money.come-later.description", {
            symbol,
            amount: formatted,
          })}
        </AddMoneyBody>
        <AddMoneyAction>
          <ButtonSmallAction onClick={() => navigate("/")}>
            {t("pages.add-money.come-later.button")}
          </ButtonSmallAction>
        </AddMoneyAction>
      </AddMoneyContainer>
    </AddMoneyWrapper>
  );
};
