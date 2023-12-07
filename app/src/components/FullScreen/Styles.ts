import styled from "styled-components";
import { mediaSizes } from "../../common/Theme";

export const FullScreenWrapper = styled.div`
  background: ${(props) => props.theme.colors.bgGreen};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.colors.bgGreen};
  border-radius: ${(props) => props.theme.box.borderRadius};
  box-shadow: rgba(0, 0, 0, 0.2) 0 0 10px;
  overflow: hidden;

  width: ${(props) => props.theme.viewport.phone.width};
  max-width: ${(props) => props.theme.viewport.phone.width};
  height: calc(100vh - (${(props) => props.theme.spacing.xlarge} * 2));
  max-height: ${(props) => props.theme.viewport.phone.height};
  min-height: ${(props) => props.theme.viewport.phone.minHeight}; // iPhone SE

  @media ${mediaSizes.portableQuery} {
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    border-radius: 0;
  }
`;

export const FullScreenHeader = styled.div`
  padding: ${(props) => props.theme.spacing.medium};
  width: 100%;

  > svg {
    cursor: pointer;
    width: 1.75rem;
    height: auto;
    color: ${(props) => props.theme.colors.green1};
  }
`;
