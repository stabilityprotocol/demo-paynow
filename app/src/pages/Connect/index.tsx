import { useAccount, useConfig, useConnect } from "wagmi";
import { ButtonSmallAction } from "../../components/Button";
import {
  ConnectContainer,
  ConnectTitle,
  ConnectWrapper,
  LoadingWrapper,
} from "./Styles";
import { useLocalStorage } from "usehooks-ts";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Navigate } from "react-router-dom";
// @ts-expect-error: regarding the import of the svg
import Magic from "../../assets/magiclink-green.svg?react";
// @ts-expect-error: regarding the import of the svg
import Loading from "../../assets/loading.svg?react";

export const Connect = () => {
  const { isConnected, isConnecting } = useAccount();
  const { t } = useTranslation();
  const { connectors } = useConfig();
  const [localStorage] = useLocalStorage(
    "debugging",
    JSON.stringify({
      metamask: false,
    })
  );

  const isMetamaskActive = useMemo(() => {
    if (window.location.hostname.match(/localhost/)) return true;
    if (!localStorage) return false;
    try {
      const { metamask } = JSON.parse(localStorage);
      return metamask;
    } catch (err) {
      console.error(err);
      return false;
    }
  }, [localStorage]);

  const { connect } = useConnect({
    connector: connectors[1],
  });

  const { connect: connectMagicLink } = useConnect({
    connector: connectors[0],
  });

  if (isConnected) {
    return <Navigate to="/" />;
  }

  if (isConnecting) {
    return (
      <ConnectWrapper>
        <LoadingWrapper>
          <Loading />
          <div>{t("pages.connect.loading")}</div>
        </LoadingWrapper>
      </ConnectWrapper>
    );
  }

  return (
    <ConnectWrapper>
      <ConnectContainer>
        <ConnectTitle>{t("pages.connect.title")}</ConnectTitle>
        <ButtonSmallAction onClick={connectMagicLink}>
          {t("pages.connect.magic")}
          <Magic />
        </ButtonSmallAction>
        {isMetamaskActive && (
          <ButtonSmallAction onClick={() => connect()}>
            {t("pages.connect.metamask")}
          </ButtonSmallAction>
        )}
      </ConnectContainer>
    </ConnectWrapper>
  );
};
