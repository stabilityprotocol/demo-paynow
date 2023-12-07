import styled from "styled-components";
import { TransactionActivityStatus } from ".";

export const TransactionActivityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
`;

export const TransactionActivityStack = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
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
  height: 5rem;
  flex: 0 0 auto;
  width: 90%;
  align-items: flex-start;
  jusitfy-content: flex-start;
`;

export const TransactionIconWrapper = styled.div`
  display: flex;
  width: 5rem;
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
  width: calc(100% - 5rem);
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
  padding-left: 1rem;
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
    /* font-size: ${(props) => props.theme.fontSizes.xlarge}; */
  }
  > p {
    /* font-size: ${(props) => props.theme.fontSizes.medium}; */
  }
`;

export const TransactionOverviewWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
  /* font-size: ${(props) => props.theme.fontSizes.large}; */
`;

export const TransactionOwnerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
`;

export const StatusBubble = styled.div<{
  status: TransactionActivityStatus;
}>`
  display: flex;
  width: auto;
  height: auto;
  border-radius: 6px;
  /* font-size: ${(props) => props.theme.fontSizes.medium}; */
  background-color: ${(props) => {
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
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-left: 0.5rem;
`;
