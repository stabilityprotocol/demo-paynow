import { ActivityWrapper, ActivityTitle } from "./Styles";

import { TransactionActivity } from "../../components/TransactionActivity";

export const Activity = () => {
  return (
    <ActivityWrapper>
      <ActivityTitle>ACTIVITY</ActivityTitle>
      <TransactionActivity />
    </ActivityWrapper>
  );
};
