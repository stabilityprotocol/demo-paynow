import { HeaderMobileWrapper } from "./Styles";
import Logo from "../../assets/paynow.svg";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const HeaderMobile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderMobileWrapper>
        <img src={Logo} alt="PayNow" onClick={() => navigate("/")} />
        <FaUserCircle onClick={() => navigate("/profile")} />
      </HeaderMobileWrapper>
    </>
  );
};
