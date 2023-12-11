import styled from "styled-components";

export const ButtonWrapper = styled.div`
  width: 80%;
  gap: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const PageTitle = styled.h1`
  font-family: ${(props) => props.theme.font.primary};
  font-weight: 500;
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  margin-bottom: ${(props) => props.theme.spacing.large};
`;

export const AttributeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.medium};
  margin-top: ${(props) => props.theme.spacing.medium};
  margin-bottom: ${(props) => props.theme.spacing.large};
  width: 80%;
`;

export const AddMemoWrapper = styled.div`
  height: 6.375rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
