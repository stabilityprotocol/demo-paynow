import { ActionBarItem, ActionBarItemIcon, ActionBarWrapper } from "./Styles";
import { PiCoinDuotone } from "react-icons/pi";
import { RiSendPlaneFill } from "react-icons/ri";
import { LuArrowDownToLine } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const ActionBarNavigation = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <ActionBarWrapper>
      <ActionBarItem onClick={() => navigate("/add-money")}>
        <ActionBarItemIcon>
          <PiCoinDuotone />
        </ActionBarItemIcon>
        <span>{t("components.actionBar.addMoney")}</span>
      </ActionBarItem>
      <ActionBarItem onClick={() => navigate("/send")}>
        <ActionBarItemIcon>
          <RiSendPlaneFill />
        </ActionBarItemIcon>
        <span>{t("components.actionBar.sendRequest")}</span>
      </ActionBarItem>
      <ActionBarItem onClick={() => navigate("/receive")}>
        <ActionBarItemIcon>
          <LuArrowDownToLine />
        </ActionBarItemIcon>
        <span>{t("components.actionBar.receive")}</span>
      </ActionBarItem>
    </ActionBarWrapper>
  );
};

export const ActionBar = ActionBarWrapper;
