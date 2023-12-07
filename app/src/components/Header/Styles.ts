import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border-bottom: none;
  padding: 0;
`;

export const HeaderActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  width: 100%;

  .selector__selected {
    background: #fff;
  }

  > * {
    margin: ${(props) => props.theme.spacing.medium} 0;
  }
`;

export const NetworkOptionWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${(props) => props.theme.spacing.xsmall};

  > svg,
  > img {
    margin-right: ${(props) => props.theme.spacing.small};
  }
`;
