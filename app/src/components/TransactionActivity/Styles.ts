import styled from "styled-components";
import { TransactionActivityStatus } from ".";

export const TransactionActivityWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
    gap: ${props => props.theme.spacing.medium};
`;

export const TransactionActivityStack = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: flex-start;
    gap: ${props => props.theme.spacing.medium};
`;

export const TransactionDate = styled.div`
    display: flex;
    width: 90%;
    height: auto;
    align-items: center;
    justify-content: flex-start;
`;

export const TransactionActivityItemWrapper = styled.div`
    display: flex;
    height: 4rem;
    flex: 0 0 auto;
    width: 90%;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const TransactionIconWrapper = styled.div`
    display: flex;
    width: 4rem;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: transparent;
`;

export const IconBubble = styled.div<{
  status: TransactionActivityStatus;
}>`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(props) => {
    switch (props.status) {
      case "Done":
        return props.theme.colors.green0;
      case "Pending":
        return props.theme.colors.blue0;
      case "Error":
        return props.theme.colors.red0;
      default:
        return props.theme.colors.green0;
    }
  }};

  > svg {
    width: 60%;
    height: 60%;
    color: ${(props) => {
      switch (props.status) {
        case "Done":
          return props.theme.colors.green1;
        case "Pending":
          return props.theme.colors.blue2;
        case "Error":
          return props.theme.colors.red1;
        default:
          return props.theme.colors.green1;
      }
    }};
  }
`;

export const TransactionDataWrapper = styled.div`
    display: flex;
    width: calc(100% - 4rem);
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
    padding-left: 0.5rem;
`;

export const TransactionAmountWrapper = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    align-items: center;
    justify-content: flex-end;
    background-color: transparent;
    >a{
        color: ${props => props.theme.colors.blueLink};
    };
    >p{
        font-size: ${props => props.theme.fontSizes.small};
    }
`;

export const TransactionOverviewWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
    align-items: center;
    justify-content: flex-start;
    background-color: transparent;
    font-size: ${props => props.theme.fontSizes.large};
`;

export const TransactionOwnerWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
    align-items: center;
    justify-content: flex-start;
    background-color: transparent;
    font-size: ${props => props.theme.fontSizes.xsmall};
`;

export const StatusBubble = styled.div<{
  status: TransactionActivityStatus;
}>`
    display: flex;
    width: auto;
    height: auto;
    border-radius: ${props => props.theme.box.borderRadius};
    font-size: ${props => props.theme.fontSizes.xsmall};
    background-color: ${props => {
        switch (props.status) {
            case "Done":
                return props.theme.colors.green0;
            case "Pending":
                return props.theme.colors.blue0;
            case "Error":
                return props.theme.colors.red0;
            default:
                return props.theme.colors.green1;
        }
    }};
    color: ${props => {
        switch (props.status) {
            case "Done":
                return props.theme.colors.green1;
            case "Pending":
                return props.theme.colors.blue2;
            case "Error":
                return props.theme.colors.red1;
            default:
                return props.theme.colors.green1;
        }
    }};
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    margin-left: 0.5rem;
`;
