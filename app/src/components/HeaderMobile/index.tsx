import { HeaderMobileProfileWrapper, HeaderMobileWrapper } from "./Styles";
import Logo from "../../assets/paynow.svg";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { UserState } from "../../common/State/User";
import { useAccount } from "wagmi";

export const HeaderMobile: React.FC = () => {
  const navigate = useNavigate();
  const userState = useRecoilValue(UserState);
  const { address } = useAccount();

  return (
    <HeaderMobileWrapper>
      <img src={Logo} alt="PayNow" onClick={() => navigate("/balance")} />
      <HeaderMobileProfileWrapper>
        <FaUserCircle onClick={() => navigate("/profile")} />
        {!userState.ens && address && <span className="notification"></span>}
      </HeaderMobileProfileWrapper>
    </HeaderMobileWrapper>
  );
};
