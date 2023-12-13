import styled from "styled-components";

export const PayRequestWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
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
