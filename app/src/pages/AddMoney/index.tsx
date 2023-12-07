import { ButtonSmallAction } from "../../components/Button";
import {
  AddMoneyAction,
  AddMoneyBody,
  AddMoneyContainer,
  AddMoneyTitle,
  AddMoneyWrapper,
} from "./Styles";

export const AddMoney = () => {
  return (
    <AddMoneyWrapper>
      <AddMoneyContainer>
        <AddMoneyTitle>ADD MONEY</AddMoneyTitle>
        <AddMoneyBody>
          This demo is for demonstration purposes only. Because of this, we have
          created a fake token called PyUSD. You can claim PyUSD to your wallet
          by clicking the button below.
        </AddMoneyBody>
        <AddMoneyAction>
          <ButtonSmallAction>CLAIM</ButtonSmallAction>
        </AddMoneyAction>
      </AddMoneyContainer>
    </AddMoneyWrapper>
  );
};
