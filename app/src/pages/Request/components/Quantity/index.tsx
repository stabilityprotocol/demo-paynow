import { QuantityWrapper, TokenName, TokenQuantity } from "./Styles";

export interface QuantityProps {
    quantity: number;
}

export const Quantity = (props: QuantityProps) => {
    return (
        <QuantityWrapper>
            <TokenName>PyUSD</TokenName>
            <TokenQuantity>{props.quantity}</TokenQuantity>
        </QuantityWrapper>
    )
}