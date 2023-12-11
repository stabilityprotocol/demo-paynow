import styled from "styled-components";

export const ActivityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
`;

export const ActivityTitle = styled.h1`
  letter-spacing: 0.1rem;
  font-size: ${(props) => props.theme.fontSizes.xxlarge};
  color: ${(props) => props.theme.colors.green1};
  font-weight: 500;
  margin-bottom: ${(props) => props.theme.spacing.large};
`;
