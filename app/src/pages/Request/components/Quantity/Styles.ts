import styled from "styled-components";

export const QuantityWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing.small};
`;

export const TokenName = styled.p`
    font-size: ${(props) => props.theme.fontSizes.large};
    font-family: ${(props) => props.theme.font.secondary};
    font-weight: 200;
    margin: 0.15rem;
`;

export const TokenQuantity = styled.p`
    font-size: ${(props) => props.theme.fontSizes.xxlarge};
    font-weight: bold;
    margin: 0.15rem;
`