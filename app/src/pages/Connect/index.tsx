import { useAccount, useConfig, useConnect } from "wagmi";
import { ButtonSmallAction } from "../../components/Button";
import { ConnectContainer, ConnectTitle, ConnectWrapper } from "./Styles";
import { useTranslation } from "react-i18next";
import { Navigate } from "react-router-dom";
// @ts-expect-error: regarding the import of the svg
import Magic from "../../assets/magiclink-green.svg?react";

export const Connect = () => {
  const { isConnected, isConnecting } = useAccount();
  const { t } = useTranslation();
  const { connectors } = useConfig();

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
    return <ConnectWrapper>LOADING</ConnectWrapper>;
  }

  return (
    <ConnectWrapper>
      <ConnectContainer>
        <ConnectTitle>LOGIN</ConnectTitle>
        <ButtonSmallAction onClick={connectMagicLink}>
          MAGIC
          <Magic />
        </ButtonSmallAction>
        {window.location.hostname.match(
          /localhost/ || window.location.href.match(/metamask/)
        ) && (
          <ButtonSmallAction onClick={() => connect()}>
            {t("components.connectionModal.metamask")}{" "}
          </ButtonSmallAction>
        )}
      </ConnectContainer>
    </ConnectWrapper>
  );
};
