import "./common/i18n";
import { ThemeProvider } from "styled-components";
import { Theme } from "./common/Theme";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PortalRoot } from "./components/PortalRoot";
import { WagmiConfig } from "wagmi";
import { config } from "./common/Blockchain";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import { Balance } from "./pages/Balance";
import { Shell } from "./components/Shell";
import { FullScreen } from "./components/FullScreen";
import { Connect } from "./pages/Connect";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Send } from "./pages/Send";
import { Activity } from "./pages/Activity";
import { Profile } from "./pages/Profile";
import { Request } from "./pages/Request";
import { Receive } from "./pages/Receive";
import { AddMoney } from "./pages/AddMoney";
import { ComeLater } from "./pages/AddMoney/ComeLater";
import { SetUsername } from "./pages/SetUsername";
import { Updater } from "./components/Updater";
import { TransferSearch } from "./pages/TransferSearch";
import { Landing } from "./pages/Landing";
import { TransferAddress } from "./pages/TransferAddress";
import { PayRequest } from "./pages/PayRequest";

import "react-toastify/dist/ReactToastify.css";
import { TransferFieldsGuard } from "./components/TransferFieldsGuard";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Shell>
        <PortalRoot />
      </Shell>
    ),
    children: [
      {
        path: "/",
        element: <Landing />,
      },
    ],
  },
  {
    path: "/balance",
    element: (
      <ProtectedRoute>
        <Shell>
          <PortalRoot />
        </Shell>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/balance",
        element: <Balance />,
      },
    ],
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <Shell>
          <PortalRoot />
        </Shell>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/transfer",
    element: (
      <ProtectedRoute>
        <Shell>
          <FullScreen />
        </Shell>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/transfer",
        element: <TransferSearch />,
      },
      {
        path: "/transfer/search",
        element: <TransferSearch />,
      },
      {
        path: "/transfer/amount",
        element: (
          <TransferFieldsGuard transferAddress>
            <TransferAddress />
          </TransferFieldsGuard>
        ),
      },
      {
        path: "/transfer/send",
        element: (
          <TransferFieldsGuard transferAddress transferAmount>
            <Send />
          </TransferFieldsGuard>
        ),
      },
      {
        path: "/transfer/request",
        element: (
          <TransferFieldsGuard transferAddress transferAmount>
            <Request />
          </TransferFieldsGuard>
        ),
      },
    ],
  },
  {
    path: "/activity",
    element: (
      <ProtectedRoute>
        <Shell>
          <FullScreen />
        </Shell>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/activity",
        element: <Activity />,
      },
    ],
  },
  {
    path: "/receive",
    element: (
      <ProtectedRoute>
        <Shell>
          <FullScreen />
        </Shell>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/receive",
        element: <Receive />,
      },
    ],
  },
  {
    path: "/pay-request",
    element: (
      <ProtectedRoute>
        <Shell>
          <FullScreen />
        </Shell>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/pay-request/:id",
        element: <PayRequest />,
      },
    ],
  },
  {
    path: "/add-money",
    element: (
      <ProtectedRoute>
        <Shell>
          <FullScreen />
        </Shell>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/add-money",
        element: <AddMoney />,
      },
      {
        path: "/add-money/come-later",
        element: <ComeLater />,
      },
    ],
  },
  {
    path: "/set-username",
    element: (
      <ProtectedRoute>
        <Shell>
          <FullScreen />
        </Shell>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/set-username",
        element: <SetUsername />,
      },
    ],
  },
  {
    path: "/connect",
    element: (
      <Shell>
        <FullScreen hideBack />
      </Shell>
    ),
    children: [
      {
        path: "/connect",
        element: <Connect />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RecoilRoot>
        <WagmiConfig config={config}>
          <ThemeProvider theme={Theme}>
            <RouterProvider router={router} />
            <ToastContainer theme="dark" />
            <Updater />
          </ThemeProvider>
        </WagmiConfig>
      </RecoilRoot>
    </>
  );
}

export default App;
