import styled from "styled-components";

export const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  align-items: center;
  justify-content: center;

  > button {
    background-color: ${(props) => props.theme.colors.green0};
    letter-spacing: 0.1rem;
  }
`;

export const LandingTitle = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xxxlarge};
  color: ${(props) => props.theme.colors.white};
  font-weight: 800;
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacing.large};
`;

export const LandingDescription = styled.span`
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.white};
  font-weight: 500;
  text-align: center;
  padding: 0 ${(props) => props.theme.spacing.medium};
  margin-bottom: ${(props) => props.theme.spacing.medium};
`;
