import { Outlet, useNavigate } from "react-router-dom";
import {
  FullScreenBackgroundLayer,
  FullScreenHeader,
  FullScreenWrapper,
} from "./Styles";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { HeaderMobile } from "../HeaderMobile";
import { HeaderWrapper } from "../PortalRoot/Styles";
import { usePortableDevice } from "../../common/hooks/usePortableDevice";

export const FullScreen: React.FC<{ hideBack?: boolean }> = ({ hideBack }) => {
  const navigate = useNavigate();
  const { isPortable } = usePortableDevice();

  return (
    <FullScreenBackgroundLayer>
      {!isPortable && (
        <HeaderWrapper>
          <HeaderMobile />
        </HeaderWrapper>
      )}
      <FullScreenWrapper>
        {!hideBack && (
          <FullScreenHeader>
            <IoArrowBackCircleSharp onClick={() => navigate(-1)} />
          </FullScreenHeader>
        )}
        <Outlet />
      </FullScreenWrapper>
    </FullScreenBackgroundLayer>
  );
};
