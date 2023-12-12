import styled from "styled-components";

export const RequestAttributeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 1rem;
`;

export const AttributeLabel = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-family: ${(props) => props.theme.font.secondary};
  margin: 0;
`;

export const AttributeValue = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-family: ${(props) => props.theme.font.secondary};
  margin: 0;
`;
