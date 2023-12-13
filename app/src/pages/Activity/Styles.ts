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

export const ActivityTitle = styled.div`
  letter-spacing: 0.1rem;
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) => props.theme.colors.green1};
`;

export const ActivityListWrapper = styled.div`
  padding: ${(props) => props.theme.spacing.small}
    ${(props) => props.theme.spacing.medium};
  width: 100%;
`;
