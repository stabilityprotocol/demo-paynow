import styled from "styled-components";

export const RequestAttributeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 1rem;
`;

export const AttributeLabel = styled.span`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-family: ${(props) => props.theme.font.secondary};
`;

export const AttributeValue = styled.span`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-family: ${(props) => props.theme.font.secondary};
`;
