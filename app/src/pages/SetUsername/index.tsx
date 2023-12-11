import { useCallback, useEffect, useState } from "react";
import { ButtonSmallAction } from "../../components/Button";
import { waitForTransaction } from "@wagmi/core";
import {
  SetUsernameAction,
  SetUsernameBody,
  SetUsernameContainer,
  SetUsernameLoading,
  SetUsernameTitle,
  SetUsernameWrapper,
} from "./Styles";
import { Navigate } from "react-router-dom";
import { LoadingIcon } from "../../components/LoadingIcon";
import { useTranslation } from "react-i18next";
import { Input } from "../../components/Input";
import { useENS } from "../../common/hooks/useENS";
import { useAccount } from "wagmi";
import { useRecoilState } from "recoil";
import { UserState } from "../../common/State/User";

export const SetUsername = () => {
  const { t } = useTranslation();
  const [username, setUsername] = useState<string | undefined>();
  const [actualUsername, setActualUsername] = useState<string | undefined>();
  const { claimName, getNameByAdress } = useENS();
  const { address } = useAccount();
  const [claiming, setClaiming] = useState<"sent" | "success" | undefined>();
  const [userState, setUserState] = useRecoilState(UserState);

  const onClaim = useCallback(() => {
    const fn = () => {
      if (!address || !username) return Promise.reject();
      const p = claimName(username);
      p.then((hash) => {
        waitForTransaction({ hash, confirmations: 2 }).then(() => {
          setUserState({ ...userState, ens: username });
          setClaiming("success");
        });
      });
      return p;
    };
    fn().catch(() => {
      setClaiming(undefined);
    });
    setClaiming("sent");
  }, [address, username, claimName, setUserState, userState]);

  useEffect(() => {
    if (address && !actualUsername) {
      getNameByAdress(address).then((name) => {
        setActualUsername(name);
      });
    }
  }, [actualUsername, address, getNameByAdress]);

  if (claiming === "success") {
    return <Navigate to="/profile" />;
  }

  if (actualUsername && actualUsername.length > 0 && !claiming) {
    return <Navigate to="/profile" />;
  }

  return (
    <SetUsernameWrapper>
      <SetUsernameContainer>
        <SetUsernameTitle>{t("pages.set-username.title")}</SetUsernameTitle>
        <SetUsernameBody>
          <div>{t("pages.set-username.description")}</div>
          <div className="input-wrapper">
            <Input
              placeholder={t("pages.set-username.inputPlaceholder")}
              onChange={setUsername}
              value={username}
            />
          </div>
        </SetUsernameBody>
        {claiming === "sent" && (
          <SetUsernameLoading>
            <LoadingIcon />
          </SetUsernameLoading>
        )}
        {!claiming && (
          <SetUsernameAction>
            <ButtonSmallAction onClick={onClaim}>
              {t("pages.set-username.button")}
            </ButtonSmallAction>
          </SetUsernameAction>
        )}
      </SetUsernameContainer>
    </SetUsernameWrapper>
  );
};
