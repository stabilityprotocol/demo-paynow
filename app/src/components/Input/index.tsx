import { useCallback } from "react";
import { Input as InputComponent, InputWrapper } from "./Styles";

export const Input: React.FC<{
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  background?: string;
  color?: string;
  type?: string;
  pattern?: string;
}> = ({
  placeholder,
  onChange,
  icon,
  value,
  disabled,
  background,
  color,
  type,
  pattern,
}) => {
  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <InputWrapper icon={!!icon} color={color} background={background}>
      {icon && icon}
      <InputComponent
        value={value}
        pattern={pattern}
        placeholder={placeholder}
        onChange={onInputChange}
        type={type}
        disabled={disabled}
      />
    </InputWrapper>
  );
};
