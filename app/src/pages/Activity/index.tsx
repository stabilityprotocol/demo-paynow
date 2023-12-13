import { ActivityWrapper, ActivityTitle, ActivityListWrapper } from "./Styles";
import { TransactionActivity } from "../../components/TransactionActivity";
import { useTranslation } from "react-i18next";
import { useRecoilValue } from "recoil";
import { UserState } from "../../common/State/User";

export const Activity = () => {
  const { t } = useTranslation();
  const { recentTransactions } = useRecoilValue(UserState);
  return (
    <ActivityWrapper>
      <ActivityTitle>{t("pages.activity.title")}</ActivityTitle>
      <ActivityListWrapper>
        <TransactionActivity transactions={recentTransactions} />
      </ActivityListWrapper>
    </ActivityWrapper>
  );
};
