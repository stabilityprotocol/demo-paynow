import { Outlet } from "react-router-dom";
import { HeaderWrapper, OutletWrapper, PortalRootWrapper } from "./Styles";
import { HeaderMobile } from "../HeaderMobile";

export const PortalRoot = () => {
  return (
    <PortalRootWrapper>
      <HeaderWrapper>
        <HeaderMobile />
      </HeaderWrapper>
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </PortalRootWrapper>
  );
};
