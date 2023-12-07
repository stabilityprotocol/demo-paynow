import { 
  ActivityWrapper 
} from "./Styles";

import { TransactionActivity } from "../../components/TransactionActivity";

export const Activity = () => {
  return (
    <ActivityWrapper>
      <h1>Activity</h1>
      <TransactionActivity />
    </ActivityWrapper>
  );
};
