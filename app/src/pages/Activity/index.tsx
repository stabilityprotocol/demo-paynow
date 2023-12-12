import { ActivityWrapper, ActivityTitle } from "./Styles";
import { TransactionActivity } from "../../components/TransactionActivity";
import { useTranslation } from "react-i18next";

export const Activity = () => {
  const { t } = useTranslation();
  return (
    <ActivityWrapper>
      <ActivityTitle>{t("pages.activity.title")}</ActivityTitle>
      <TransactionActivity />
    </ActivityWrapper>
  );
};
