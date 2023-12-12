import { HeaderMobileProfileWrapper, HeaderMobileWrapper } from "./Styles";
import Logo from "../../assets/paynow.svg";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { UserState } from "../../common/State/User";

export const HeaderMobile: React.FC = () => {
  const navigate = useNavigate();
  const userState = useRecoilValue(UserState);

  return (
    <>
      <HeaderMobileWrapper>
        <img src={Logo} alt="PayNow" onClick={() => navigate("/")} />
        <HeaderMobileProfileWrapper>
          <FaUserCircle onClick={() => navigate("/profile")} />
          {!userState.ens && <span className="notification"></span>}
        </HeaderMobileProfileWrapper>
      </HeaderMobileWrapper>
    </>
  );
};
