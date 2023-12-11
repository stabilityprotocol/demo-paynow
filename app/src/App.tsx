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

import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Shell>
          <PortalRoot />
        </Shell>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <Balance />,
      },
      {
        path: "/balance",
        element: <Balance />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/send",
    element: (
      <ProtectedRoute>
        <Shell>
          <FullScreen />
        </Shell>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/send",
        element: <Send />,
      },
      {
        path: "/send/request",
        element: <Request />,
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
