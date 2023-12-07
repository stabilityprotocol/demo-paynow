import { Outlet, useNavigate } from "react-router-dom";
import { FullScreenHeader, FullScreenWrapper } from "./Styles";
import { IoArrowBackCircleSharp } from "react-icons/io5";

export const FullScreen: React.FC<{ hideBack?: boolean }> = ({ hideBack }) => {
  const navigate = useNavigate();

  return (
    <FullScreenWrapper>
      {!hideBack && (
        <FullScreenHeader>
          <IoArrowBackCircleSharp onClick={() => navigate(-1)} />
        </FullScreenHeader>
      )}
      <Outlet />
    </FullScreenWrapper>
  );
};
