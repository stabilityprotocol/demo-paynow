import styled from "styled-components";

export const SetUsernameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const SetUsernameContainer = styled.div`
  background: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.spacing.medium};
  margin: ${(props) => props.theme.spacing.large};
  border-radius: ${(props) => props.theme.box.borderRadius};
`;

export const SetUsernameTitle = styled.div`
  display: flex;
  justify-content: center;
  letter-spacing: 0.1rem;
  font-size: ${(props) => props.theme.fontSizes.large};
  margin-bottom: ${(props) => props.theme.spacing.small};
`;

export const SetUsernameBody = styled.div`
  font-family: ${(props) => props.theme.font.secondary};
  text-align: center;

  > .input-wrapper {
    margin-top: ${(props) => props.theme.spacing.medium};
  }
`;

export const SetUsernameAction = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing.medium};

  > button {
    width: 80%;
  }
`;

export const SetUsernameLoading = styled.div`
  display: flex;
  justify-content: center;

  svg {
    margin-top: ${(props) => props.theme.spacing.large};
    width: 4rem;
    height: 4rem;
    color: ${(props) => props.theme.colors.green1};
  }
`;
