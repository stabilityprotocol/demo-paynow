import { useERC20 } from "../../../../common/hooks/useERC20";
import { QuantityWrapper, TokenName, TokenQuantity } from "./Styles";

export interface QuantityProps {
  quantity: string;
}

export const Quantity = (props: QuantityProps) => {
  const { symbol } = useERC20();
  return (
    <QuantityWrapper>
      <TokenName>{symbol}</TokenName>
      <TokenQuantity>{props.quantity}</TokenQuantity>
    </QuantityWrapper>
  );
};
