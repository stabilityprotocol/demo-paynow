import styled from "styled-components";

export const AddMoneyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const AddMoneyContainer = styled.div`
  background: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.spacing.medium};
  margin: ${(props) => props.theme.spacing.large};
  border-radius: ${(props) => props.theme.box.borderRadius};
`;

export const AddMoneyTitle = styled.div`
  display: flex;
  justify-content: center;
  letter-spacing: 0.1rem;
  font-size: ${(props) => props.theme.fontSizes.large};
  margin-bottom: ${(props) => props.theme.spacing.small};
`;

export const AddMoneyBody = styled.div`
  font-family: ${(props) => props.theme.font.secondary};
  text-align: center;
`;

export const AddMoneyAction = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing.medium};

  > button {
    width: 80%;
  }
`;
