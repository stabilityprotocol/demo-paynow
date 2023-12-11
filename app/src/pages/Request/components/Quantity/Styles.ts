import styled from "styled-components";

export const QuantityWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const TokenName = styled.p`
    font-size: ${(props) => props.theme.fontSizes.large};
    font-family: ${(props) => props.theme.font.secondary};
    font-weight: 200;
`;

export const TokenQuantity = styled.p`
    font-size: ${(props) => props.theme.fontSizes.xxlarge};
    font-weight: bold;
`