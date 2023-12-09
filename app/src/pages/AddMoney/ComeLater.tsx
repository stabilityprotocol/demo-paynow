import { useERC20 } from "../../common/Hooks/useERC20";
import { ButtonSmallAction } from "../../components/Button";
import {
  AddMoneyAction,
  AddMoneyBody,
  AddMoneyContainer,
  AddMoneyTitle,
  AddMoneyWrapper,
} from "./Styles";
import { useAppBalance } from "../../common/Hooks/useAppBalance";
import { useNavigate } from "react-router-dom";

export const ComeLater = () => {
  const { symbol } = useERC20();
  const navigate = useNavigate();
  const { formatted } = useAppBalance();

  return (
    <AddMoneyWrapper>
      <AddMoneyContainer>
        <AddMoneyTitle>COME LATER</AddMoneyTitle>
        <AddMoneyBody>
          You already have {symbol} in your wallet ({formatted} {symbol}). Come
          back later to claim more.
        </AddMoneyBody>
        <AddMoneyAction>
          <ButtonSmallAction onClick={() => navigate("/")}>
            GO TO DASHBOARD
          </ButtonSmallAction>
        </AddMoneyAction>
      </AddMoneyContainer>
    </AddMoneyWrapper>
  );
};
