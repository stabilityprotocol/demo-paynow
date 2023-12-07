import styled from "styled-components";

export const ActionBarWrapper = styled.div`
  width: 100%;
  backdrop-filter: blur(80px);
  box-shadow: rgba(0, 0, 0, 0.2) 0 0 1rem;
  border-radius: ${(props) => props.theme.box.borderRadius};
  padding: ${(props) => props.theme.spacing.medium};
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ActionBarItem = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.fontSizes.xsmall};
  font-family: ${(props) => props.theme.font.secondary};
  color: ${(props) => props.theme.colors.green1};
`;

export const ActionBarItemIcon = styled.span`
  background: ${(props) => props.theme.colors.green0};
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: ${(props) => props.theme.spacing.xsmall};

  > svg {
    height: 1.5rem;
    width: auto;
  }
`;
