import {
  ActionBarWrapper,
  ProfileFooter,
  ProfileImage,
  ProfileLowerContainer,
  ProfileLowerSection,
  ProfileName,
  ProfileUpperContainer,
  ProfileUpperSection,
  ProfileWrapper,
  SetProfileName,
  UsernameTitle,
  ActivityWrapper,
  ActivityTitleWrapper,
  ActivityTitle,
  RedirectToActivity,
  TransactionActivityWrapper,
} from "./Styles";
import { ActionBar } from "../../components/ActionBar";
import { WalletDetail } from "./Components/WalletDetail";
import { useTranslation } from "react-i18next";
import { useMemo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { UserState } from "../../common/State/User";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { useDisconnect } from "wagmi";
import { getUsernameInitials } from "../../common/Utils";
import { TransactionActivity } from "../../components/TransactionActivity";
import { TransactionActivityData } from "../../common/models/TransactionActivity";
import { PiArrowCircleRightFill } from "react-icons/pi";

export const Profile = () => {
  const { disconnect } = useDisconnect();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { ens: username } = useRecoilValue(UserState);
  const { recentTransactions } = useRecoilValue(UserState);
  const [transactions, setDisplayTransactions] = useState<
    { date: string; items: TransactionActivityData[] }[]
  >([]);

  const normalizedUsername = useMemo(() => {
    if (!username) return undefined;
    return username.concat(".stability");
  }, [username]);

  useEffect(() => {
    if (recentTransactions.length > 0) {
      setDisplayTransactions([recentTransactions[0]]);
    }
  }, [recentTransactions]);

  return (
    <ProfileWrapper>
      <ProfileUpperSection>
        <ProfileUpperContainer>
          <ProfileImage>{getUsernameInitials(username)}</ProfileImage>
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
          <ActivityWrapper>
            <ActivityTitleWrapper>
              <ActivityTitle>{t("pages.profile.activityTitle")}</ActivityTitle>
              <RedirectToActivity onClick={() => navigate("/activity")}>
                {t("pages.profile.seeAllActivity")}
                <PiArrowCircleRightFill />
              </RedirectToActivity>
            </ActivityTitleWrapper>
            <TransactionActivityWrapper>
              <TransactionActivity transactions={transactions} />
            </TransactionActivityWrapper>
          </ActivityWrapper>
          <ProfileFooter>
            <span
              onClick={() => window.open("https://docs.stabilityprotocol.com")}
            >
              {t("pages.profile.helpCenter")} <IoChatbubbleEllipses />
            </span>
            <span onClick={() => disconnect()}>
              {t("pages.profile.logout")}
            </span>
          </ProfileFooter>
        </ProfileLowerContainer>
      </ProfileLowerSection>
    </ProfileWrapper>
  );
};
