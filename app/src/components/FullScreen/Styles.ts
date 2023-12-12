import styled from "styled-components";
import { mediaSizes } from "../../common/Theme";

export const FullScreenBackgroundLayer = styled.div`
  height: 100dvh;
  max-height: 100dvh;
  min-height: 100dvh;
  width: 100dvw;
  display: flex;
  justify-content: center;
  position: relative;
  background: ${(props) => props.theme.colors.bgGreen};
`;

export const FullScreenWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  width: ${(props) => props.theme.viewport.phone.width};
  max-width: ${(props) => props.theme.viewport.phone.width};
  height: calc(100vh - (${(props) => props.theme.spacing.xlarge} * 2));
  max-height: ${(props) => props.theme.viewport.phone.height};
  min-height: ${(props) => props.theme.viewport.phone.minHeight}; // iPhone SE

  @media ${mediaSizes.portableQuery} {
    width: 100vw;
    height: 100dvh;
    max-width: 100vw;
    max-height: 100dvh;
    border-radius: 0;
  }
`;

export const FullScreenHeader = styled.div`
  padding: ${(props) => props.theme.spacing.xxlarge}
    ${(props) => props.theme.spacing.medium};
  padding-bottom: ${(props) => props.theme.spacing.xsmall};
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media ${mediaSizes.portableQuery} {
    padding: ${(props) => props.theme.spacing.medium};
    padding-bottom: ${(props) => props.theme.spacing.xsmall};
  }

  > svg {
    cursor: pointer;
    width: 2rem;
    height: auto;
    color: ${(props) => props.theme.colors.green1};
  }
`;
