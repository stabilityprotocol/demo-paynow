import { Navigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { TransferState } from "../../common/State/Transfer";

export const TransferFieldsGuard: React.FC<{
  transferAddress?: boolean;
  transferAmount?: boolean;
  children: React.ReactNode;
}> = ({ transferAddress, transferAmount, children }) => {
  const [transferState] = useRecoilState(TransferState);

  if (transferAddress && !transferState.account) {
    return <Navigate to="/transfer" />;
  }

  if (transferAmount && !transferState.formattedAmount) {
    return <Navigate to="/transfer/address" />;
  }

  return children;
};
