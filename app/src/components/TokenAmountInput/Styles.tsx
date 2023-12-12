import styled from "styled-components";

export const TokenAmountInputWrapper = styled.div<{
  color?: string;
  background?: string;
  enoughBalance?: boolean;
}>`
  width: 100%;
  display: flex;
  background: ${(p) => p.background || "inherit"};
  color: ${(p) => p.color || "inherit"};
  border-radius: ${(p) => p.theme.box.borderRadius};
  align-items: center;
  padding: ${(p) => p.theme.spacing.xsmall} ${(p) => p.theme.spacing.medium};
  ${(p) =>
    p.enoughBalance == false && `border: 1px solid ${p.theme.colors.red1}`};
  input {
    ${(p) => p.enoughBalance == false && `color: ${p.theme.colors.red1}`};
  }
`;

export const StyledImage = styled.img`
  width: 12%;
  background: ${(p) => p.theme.colors.neutral};
  border-radius: 100%;
  aspect-ratio: 1;
  padding: ${(p) => p.theme.spacing.xsmall};
`;

export const InputWrapper = styled.span`
  width: 80%;
  input {
    font-size: ${(p) => p.theme.fontSizes.medium};
  }
`;

export const MaxButton = styled.button<{ onMax?: boolean }>`
  max-height: 80%;
  width: 15%;
  border: none;
  background: inherit;
  padding: ${(p) => p.theme.spacing.xsmall};
  border-radius: ${(p) => p.theme.box.borderRadius};
  font-size: ${(p) => p.theme.fontSizes.medium};
  &:hover {
    cursor: pointer;
    background: ${(p) => p.theme.colors.green0};
  }

  ${(p) => p.onMax && `background: ${p.theme.colors.green0}`};
`;
