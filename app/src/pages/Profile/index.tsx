import {
  ActionBarWrapper,
  ProfileImage,
  ProfileLowerContainer,
  ProfileLowerSection,
  ProfileName,
  ProfileUpperContainer,
  ProfileUpperSection,
  ProfileWrapper,
  UsernameTitle,
} from "./Styles";
import { ActionBar } from "../../components/ActionBar";
import { WalletDetail } from "./Components/WalletDetail";
import { useTranslation } from "react-i18next";

export const Profile = () => {
  const { t } = useTranslation();

  return (
    <ProfileWrapper>
      <ProfileUpperSection>
        <ProfileUpperContainer>
          <ProfileImage>JS</ProfileImage>
          <UsernameTitle>{t("pages.profile.usernameTitle")}</UsernameTitle>
          <ProfileName>john.smith.stability</ProfileName>
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
