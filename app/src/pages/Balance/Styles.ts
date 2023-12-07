import styled from "styled-components";

export const BalanceWrapper = styled.div`
  width: 100%;
`;

export const BalanceUpperSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: ${(props) => props.theme.spacing.xlarge};
  color: ${(props) => props.theme.colors.white};
  padding: 0 ${(props) => props.theme.spacing.medium};
`;

export const BalanceUpperTitle = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: ${(props) => props.theme.fontSizes.large};
  letter-spacing: 0.1rem;
  display: flex;
  align-items: center;

  > svg {
    margin-left: ${(props) => props.theme.spacing.small};
  }
`;

export const BalanceUpperBalance = styled.div`
  font-size: ${(props) => props.theme.fontSizes.xxlarge};
  letter-spacing: 0.1rem;
  margin-top: ${(props) => props.theme.spacing.large};

  > .symbol {
    font-size: ${(props) => props.theme.fontSizes.large};
    margin-right: ${(props) => props.theme.spacing.small};
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const BalanceLowerSection = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.bgGreen};
  padding: ${(props) => props.theme.spacing.medium};
`;
