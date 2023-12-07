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

export const Balance = () => {
  const navigate = useNavigate();

  return (
    <BalanceWrapper>
      <BalanceUpperSection>
        <BalanceUpperContainer>
          <BalanceUpperTitle>
            BALANCE <FaMoneyBill />
          </BalanceUpperTitle>
          <BalanceUpperBalance>
            <span className="symbol">$</span>
            <span>10,000.00</span>
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
              View recent transactions <FaCircleArrowRight />
            </span>
          </BalanceViewMoreTransactions>
        </BalanceLowerContainer>
      </BalanceLowerSection>
    </BalanceWrapper>
  );
};
