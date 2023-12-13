import { LandingWrapper, LandingTitle, LandingDescription } from "./Styles";

import { ButtonAction } from "../../components/Button";
import { PiArrowCircleRightFill } from "react-icons/pi";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";
import { Navigate } from "react-router-dom";

export const Landing = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isConnected } = useAccount();

  if (isConnected) {
    return <Navigate to="/balance" />;
  }

  return (
    <LandingWrapper>
      <LandingTitle>{t("pages.landing.title")}</LandingTitle>
      <LandingDescription>{t("pages.landing.description")}</LandingDescription>
      <ButtonAction onClick={() => navigate("/connect")}>
        {t("pages.landing.button")} <PiArrowCircleRightFill />
      </ButtonAction>
    </LandingWrapper>
  );
};
