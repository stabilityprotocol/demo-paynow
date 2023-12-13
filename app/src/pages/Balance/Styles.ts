import styled from "styled-components";

export const BalanceWrapper = styled.div`
  width: 100%;
`;

export const BalanceUpperSection = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 55%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.spacing.medium};
`;

export const BalanceUpperContainer = styled.div`
  padding-bottom: ${(props) => props.theme.spacing.xlarge};
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
  margin-top: ${(props) => props.theme.spacing.medium};

  > .symbol {
    font-size: ${(props) => props.theme.fontSizes.large};
    margin-right: ${(props) => props.theme.spacing.small};
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const BalanceLowerSection = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 45%;
  border-radius: ${(props) => props.theme.box.borderRadius};
  background: ${(props) => props.theme.colors.bgGreen};
  padding: ${(props) => props.theme.spacing.small}
    ${(props) => props.theme.spacing.medium};
  display: flex;
  flex-direction: column;
`;

export const BalanceLowerContainer = styled.div`
  margin-top: ${(props) => props.theme.spacing.xlarge};
  margin-bottom: ${(props) => props.theme.spacing.medium};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
`;

export const ActionBarWrapper = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 0%;
  width: 100%;
  padding: 0 ${(props) => props.theme.spacing.medium};
`;

export const BalanceViewMoreTransactions = styled.div`
  font-size: ${(props) => props.theme.fontSizes.small};
  font-family: ${(props) => props.theme.font.secondary};

  > span {
    display: flex;
    align-items: center;
    cursor: pointer;

    > svg {
      margin-left: ${(props) => props.theme.spacing.xsmall};
    }
  }
`;
