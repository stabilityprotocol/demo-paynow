import { useCallback, useState } from "react";
import { useERC20 } from "../../common/hooks/useERC20";
import { ButtonSmallAction } from "../../components/Button";
import { waitForTransaction } from "@wagmi/core";

import {
  AddMoneyAction,
  AddMoneyBody,
  AddMoneyContainer,
  AddMoneyLoading,
  AddMoneyTitle,
  AddMoneyWrapper,
} from "./Styles";
import { useAppBalance } from "../../common/hooks/useAppBalance";
import { Navigate } from "react-router-dom";
import { useFaucet } from "../../common/hooks/useFaucet";
import { LoadingIcon } from "../../components/LoadingIcon";

export const AddMoney = () => {
  const { symbol } = useERC20();
  const { value } = useAppBalance();
  const { getTokens } = useFaucet();
  const [claiming, setClaiming] = useState<"sent" | "success" | undefined>();

  const onClaim = useCallback(() => {
    const fn = () => {
      const p = getTokens();
      p.then((hash) => {
        waitForTransaction({ hash, confirmations: 2 }).then(() => {
          setClaiming("success");
        });
      });
      return p;
    };
    fn().catch(() => {
      setClaiming(undefined);
    });
    setClaiming("sent");
  }, [getTokens]);

  if (value && value > 0n) {
    return <Navigate to="/add-money/come-later" replace />;
  }

  if (claiming === "success") {
    return <Navigate to="/" />;
  }

  return (
    <AddMoneyWrapper>
      <AddMoneyContainer>
        <AddMoneyTitle>ADD MONEY</AddMoneyTitle>
        <AddMoneyBody>
          This demo is for demonstration purposes only. Because of this, we have
          created a fake token called {symbol}. You can claim {symbol} to your
          wallet by clicking the button below.
        </AddMoneyBody>
        {claiming === "sent" && (
          <AddMoneyLoading>
            <LoadingIcon />
          </AddMoneyLoading>
        )}
        {!claiming && (
          <AddMoneyAction>
            <ButtonSmallAction onClick={onClaim}>CLAIM</ButtonSmallAction>
          </AddMoneyAction>
        )}
      </AddMoneyContainer>
    </AddMoneyWrapper>
  );
};
