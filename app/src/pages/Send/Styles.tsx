import styled from "styled-components";

export const ButtonWrapper = styled.div`
  width: 80%;
  gap: ${(p) => p.theme.spacing.medium};
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const PageTitle = styled.div`
  font-family: ${(props) => props.theme.font.primary};
  font-weight: 500;
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
