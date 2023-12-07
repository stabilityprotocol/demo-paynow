import styled from "styled-components";

export const ConnectWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const ConnectContainer = styled.div`
  background: #fff;
  border-radius: ${(props) => props.theme.box.borderRadius};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => props.theme.spacing.medium};
  width: 70%;

  > button {
    width: 100%;
    margin-top: ${(props) => props.theme.spacing.medium};

    > svg {
      > g {
        > path {
          fill: ${(props) => props.theme.colors.green0};
        }
      }
    }
  }
`;

export const ConnectTitle = styled.span`
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
`;
