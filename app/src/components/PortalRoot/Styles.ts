import styled from "styled-components";
import { mediaSizes } from "../../common/Theme";
import heroBg from "../../assets/hero.png";

export const PortalRootWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${(props) => props.theme.box.borderRadius};
  box-shadow: rgba(0, 0, 0, 0.2) 0 0 10px;
  overflow: hidden;
  background: ${(props) => props.theme.colors.bgGreen};
  background: url(${heroBg}) no-repeat top center;
  background-size: 250% auto;

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

export const OutletWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: ${(props) => props.theme.spacing.xxlarge} 0 0 0;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: ${(props) => props.theme.spacing.small};
  display: flex;
  justify-content: center;
  z-index: 99999;
`;
