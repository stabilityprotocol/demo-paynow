import {
  ActionBarWrapper,
  BalanceLowerContainer,
  BalanceLowerSection,
  BalanceUpperBalance,
  BalanceUpperContainer,
  BalanceUpperSection,
  BalanceUpperTitle,
  BalanceViewMoreTransactions,
  BalanceWrapper,
} from "./Styles";
import { FaMoneyBill } from "react-icons/fa";
import { ActionBar } from "../../components/ActionBar";
import { WalletDetail } from "./Components/WalletDetail";
import { useNavigate } from "react-router-dom";
import { FaCircleArrowRight } from "react-icons/fa6";
import { useAppBalance } from "../../common/hooks/useAppBalance";
import { useTranslation } from "react-i18next";

export const Balance = () => {
  const { formatted } = useAppBalance();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <BalanceWrapper>
      <BalanceUpperSection>
        <BalanceUpperContainer>
          <BalanceUpperTitle>
            {t("pages.balance.title")} <FaMoneyBill />
          </BalanceUpperTitle>
          <BalanceUpperBalance>
            <span className="symbol">$</span>
            <span>{formatted}</span>
          </BalanceUpperBalance>
        </BalanceUpperContainer>
      </BalanceUpperSection>
      <BalanceLowerSection>
        <ActionBarWrapper>
          <ActionBar />
        </ActionBarWrapper>
        <BalanceLowerContainer>
          <WalletDetail />
          <BalanceViewMoreTransactions>
            <span onClick={() => navigate("/activity")}>
              {t("pages.balance.recentTransactions")} <FaCircleArrowRight />
            </span>
          </BalanceViewMoreTransactions>
        </BalanceLowerContainer>
      </BalanceLowerSection>
    </BalanceWrapper>
  );
};
