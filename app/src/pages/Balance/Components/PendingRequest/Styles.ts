import styled from "styled-components";

export const RequestItemWrapper = styled.div`
  background: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.box.borderRadius};
  padding: ${(props) => props.theme.spacing.medium};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const RequestItemInfo = styled.div`
  font-family: ${(props) => props.theme.font.secondary};
  font-size: ${(props) => props.theme.fontSizes.small};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RequestItemDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.spacing.small};
`;

export const RequestItemDetailTitle = styled.span`
  > .label {
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-weight: 800;
    margin-right: ${(props) => props.theme.spacing.xsmall};
  }

  > .status {
    padding: ${(props) => props.theme.spacing.xsmall};
    font-weight: 800;
    font-size: ${(props) => props.theme.fontSizes.xsmall};
    border-radius: ${(props) => props.theme.box.borderRadius};
    color: ${(props) => props.theme.colors.blue2};
    background: ${(props) => props.theme.colors.blue1};
  }
`;

export const RequestItemDetailSubtitle = styled.span`
  > .label {
    font-weight: 800;
    margin-right: ${(props) => props.theme.spacing.xsmall};
  }

  .target {
    font-size: ${(props) => props.theme.fontSizes.xsmall};
  }
`;

export const RequestItemDetailAmount = styled.div`
  text-align: right;
`;

export const RequestAction = styled.div`
  width: 100%;

  > button {
    width: 100%;
  }
`;
