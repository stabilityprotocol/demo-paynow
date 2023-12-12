import { Input } from "../Input";
import { FC, useMemo } from "react";
import {
  InputWrapper,
  MaxButton,
  StyledImage,
  TokenAmountInputWrapper,
} from "./Styles";
import cube from "../../assets/cube-green.svg";
import { useAppBalance } from "../../common/hooks/useAppBalance";

interface TokenAmountInputProps {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  color?: string;
  background?: string;
}

export const TokenAmountInput: FC<TokenAmountInputProps> = ({
  onChange,
  value,
  placeholder,
  color,
  background,
}) => {
  const { formatted } = useAppBalance();

  const enoughBalance = useMemo(() => {
    return Number(formatted) >= Number(value);
  }, [formatted, value]);

  return (
    <TokenAmountInputWrapper
      color={color}
      background={background}
      enoughBalance={enoughBalance}
    >
      <StyledImage src={cube} />
      <InputWrapper>
        <Input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          color={color}
          background={background}
          type="number"
        />
      </InputWrapper>
      <MaxButton
        onClick={() => formatted && onChange(formatted)}
        onMax={parseFloat(formatted!) == parseFloat(value)}
      >
        MAX
      </MaxButton>
    </TokenAmountInputWrapper>
  );
};
