import styled from "styled-components";

export const ButtonWrapper = styled.div`
  width: 80%;
  gap: ${(p) => p.theme.spacing.medium};
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const PageTitle = styled.h1`
  font-family: ${(props) => props.theme.font.primary};
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  margin-bottom: ${(props) => props.theme.spacing.large};
`;

export const UserIconFooter = styled.span`
  font-family: ${(props) => props.theme.font.secondary};
`;

export const AttributeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.medium};
  margin-top: ${(props) => props.theme.spacing.large};
  margin-bottom: ${(props) => props.theme.spacing.xlarge};
  width: 80%;
`;

export const LoadingIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  svg {
    margin-top: ${(props) => props.theme.spacing.large};
    width: 4rem;
    height: 4rem;
    color: ${(props) => props.theme.colors.green1};
  }

  > div {
    letter-spacing: 0.1rem;
    font-size: ${(props) => props.theme.fontSizes.large};
    color: ${(props) => props.theme.colors.green1};
  }
`;
