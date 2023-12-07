import { useNavigate } from "react-router-dom";
import { useDisconnect } from "wagmi";
import {
  ActionBarWrapper,
  BalanceLowerSection,
  BalanceUpperBalance,
  BalanceUpperSection,
  BalanceUpperTitle,
  BalanceWrapper,
} from "./Styles";
import { FaMoneyBill } from "react-icons/fa";
import { ActionBar } from "../../components/ActionBar";

export const Balance = () => {
  const navigate = useNavigate();
  const { disconnect } = useDisconnect();

  return (
    <BalanceWrapper>
      <BalanceUpperSection>
        <div>
          <BalanceUpperTitle>
            BALANCE <FaMoneyBill />
          </BalanceUpperTitle>
          <BalanceUpperBalance>
            <span className="symbol">$</span>
            <span>10,000.00</span>
          </BalanceUpperBalance>
        </div>
      </BalanceUpperSection>
      <BalanceLowerSection>
        <ActionBarWrapper>
          <ActionBar />
        </ActionBarWrapper>
        <h1>Balance</h1>
        <div>
          <button onClick={() => navigate("/send")}>Go To Send</button>
        </div>
        <div>
          <button onClick={() => navigate("/send/request")}>
            Go To Request
          </button>
        </div>
        <div>
          <button onClick={() => navigate("/activity")}>Go To Activity</button>
        </div>
        <div>
          <button onClick={() => navigate("/profile")}>Go To Profile</button>
        </div>
        <div>
          <button onClick={() => disconnect()}>Disconnect</button>
        </div>
      </BalanceLowerSection>
    </BalanceWrapper>
  );
};
