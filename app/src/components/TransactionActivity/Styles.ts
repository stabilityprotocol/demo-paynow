import styled from "styled-components";
import {
  TransactionActivityStatus,
  TransactionActivityType,
} from "../../common/models/TransactionActivity";

export const TransactionActivityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: ${(props) => props.theme.spacing.medium};
  padding: ${(props) => props.theme.spacing.small}
    ${(props) => props.theme.spacing.medium};
`;

export const TransactionActivityStack = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: flex-start;
  gap: ${(props) => props.theme.spacing.medium};
`;

export const TransactionDate = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: flex-start;
  font-family: ${(props) => props.theme.font.secondary};
  font-size: ${(props) => props.theme.fontSizes.small};
`;

export const TransactionActivityItemWrapper = styled.div`
  display: flex;
  height: 3.125rem;
  flex: 0 0 auto;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const TransactionIconWrapper = styled.div`
  display: flex;
  width: 3.125rem;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export const IconBubble = styled.div<{
  transactionType?: TransactionActivityType;
}>`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(props) => {
    switch (props.transactionType) {
      case "Request":
        return props.theme.colors.blue0;
      default:
        return props.theme.colors.green0;
    }
  }};

  > svg {
    width: 60%;
    height: 60%;
    color: ${(props) => {
      switch (props.transactionType) {
        case "Request":
          return props.theme.colors.blue2;
        default:
          return props.theme.colors.green1;
      }
    }};
  }
`;

export const TransactionDataWrapper = styled.div`
  display: flex;
  width: calc(100% - 3.125rem);
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export const TransactionDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
  background-color: transparent;
  padding-left: ${(props) => props.theme.spacing.small};
`;

export const TransactionAmountWrapper = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  background-color: transparent;
  > a {
    color: ${(props) => props.theme.colors.blueLink};
    font-family: ${(props) => props.theme.font.secondary};
  }
  > span {
    font-size: ${(props) => props.theme.fontSizes.small};
    font-family: ${(props) => props.theme.font.secondary};
  }
`;

export const TransactionOverviewWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
  gap: ${(props) => props.theme.spacing.xsmall};
`;

export const TransactionOwnerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
  font-size: ${(props) => props.theme.fontSizes.xsmall};
  font-family: ${(props) => props.theme.font.secondary};
`;

export const StatusBubble = styled.div<{
  status: TransactionActivityStatus;
}>`
  display: flex;
  width: auto;
  height: auto;
  border-radius: ${(props) => props.theme.box.borderRadius};
  font-size: ${(props) => props.theme.fontSizes.xsmall};
  font-family: ${(props) => props.theme.font.secondary};
  background-color: ${(props) => {
    switch (props.status) {
      case TransactionActivityStatus.DONE:
        return props.theme.colors.green0;
      case TransactionActivityStatus.PENDING:
        return props.theme.colors.blue0;
      case TransactionActivityStatus.ERROR:
        return props.theme.colors.red0;
      default:
        return props.theme.colors.green1;
    }
  }};
  color: ${(props) => {
    switch (props.status) {
      case TransactionActivityStatus.DONE:
        return props.theme.colors.green1;
      case TransactionActivityStatus.PENDING:
        return props.theme.colors.blue2;
      case TransactionActivityStatus.ERROR:
        return props.theme.colors.red1;
      default:
        return props.theme.colors.green1;
    }
  }};
  padding-left: ${(props) => props.theme.spacing.small};
  padding-right: ${(props) => props.theme.spacing.small};
`;
