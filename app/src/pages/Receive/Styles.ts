import styled from "styled-components";

export const ReceiveWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ReceiveTitle = styled.div`
  letter-spacing: 0.1rem;
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) => props.theme.colors.green1};
  margin-bottom: ${(props) => props.theme.spacing.large};
`;

export const ReceiveQrWrapper = styled.div`
  padding: ${(props) => props.theme.spacing.medium};
  background: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.box.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;

  > span {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ReceiveActionWrapper = styled.div`
  margin: ${(props) => props.theme.spacing.large} 0;
`;

export const ReceiveSubTitle = styled.div`
  padding: ${(props) => props.theme.spacing.large};
  color: ${(props) => props.theme.colors.green1};
  text-align: center;
  font-family: ${(props) => props.theme.font.secondary};
  font-size: ${(props) => props.theme.fontSizes.small};
`;
