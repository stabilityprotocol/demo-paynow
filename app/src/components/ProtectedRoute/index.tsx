import { Navigate } from "react-router-dom";
import { useAccount } from "wagmi";

export const ProtectedRoute: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { isConnected } = useAccount();
  if (!isConnected) {
    return <Navigate to="/connect" />;
  }
  return children;
};
