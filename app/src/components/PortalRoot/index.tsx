import { Outlet } from "react-router-dom";
import {
  PortalRootBackgroundLayer,
  HeaderWrapper,
  OutletWrapper,
  PortalRootWrapper,
} from "./Styles";
import { HeaderMobile } from "../HeaderMobile";

export const PortalRoot = () => {
  return (
    <PortalRootBackgroundLayer>
      <HeaderWrapper>
        <HeaderMobile />
      </HeaderWrapper>
      <PortalRootWrapper>
        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
      </PortalRootWrapper>
    </PortalRootBackgroundLayer>
  );
};
