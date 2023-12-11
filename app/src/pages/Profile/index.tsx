import {
  ActionBarWrapper,
  ProfileImage,
  ProfileLowerContainer,
  ProfileLowerSection,
  ProfileName,
  ProfileUpperContainer,
  ProfileUpperSection,
  ProfileWrapper,
  SetProfileName,
  UsernameTitle,
} from "./Styles";
import { ActionBar } from "../../components/ActionBar";
import { WalletDetail } from "./Components/WalletDetail";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { UserState } from "../../common/State/User";

export const Profile = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { ens: username } = useRecoilValue(UserState);

  const normalizedUsername = useMemo(() => {
    if (!username) return undefined;
    return username.concat(".stability");
  }, [username]);

  const normalizedImageText = useMemo(() => {
    if (!username) return "?";
    // get initials delimitated by hyphen or dot and uppercase them with limit of 2
    const initials = username
      .split(/[-.]/)
      .map((word) => word.charAt(0).toUpperCase())
      .join("")
      .substring(0, 2);
    return initials;
  }, [username]);

  return (
    <ProfileWrapper>
      <ProfileUpperSection>
        <ProfileUpperContainer>
          <ProfileImage>{normalizedImageText}</ProfileImage>
          <UsernameTitle>{t("pages.profile.usernameTitle")}</UsernameTitle>
          {normalizedUsername ? (
            <ProfileName>{normalizedUsername}</ProfileName>
          ) : (
            <SetProfileName onClick={() => navigate("/set-username")}>
              {t("pages.profile.setProfileName")}
            </SetProfileName>
          )}
        </ProfileUpperContainer>
      </ProfileUpperSection>
      <ProfileLowerSection>
        <ActionBarWrapper>
          <ActionBar>
            <WalletDetail />
          </ActionBar>
        </ActionBarWrapper>
        <ProfileLowerContainer>
          <h1>transactions here</h1>
        </ProfileLowerContainer>
      </ProfileLowerSection>
    </ProfileWrapper>
  );
};
