import { ActionBarItem, ActionBarItemIcon, ActionBarWrapper } from "./Styles";
import { PiCoinDuotone } from "react-icons/pi";
import { RiSendPlaneFill } from "react-icons/ri";
import { LuArrowDownToLine } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export const ActionBar = () => {
  const navigate = useNavigate();

  return (
    <ActionBarWrapper>
      <ActionBarItem onClick={() => navigate("/add-money")}>
        <ActionBarItemIcon>
          <PiCoinDuotone />
        </ActionBarItemIcon>
        <span>Add Money</span>
      </ActionBarItem>
      <ActionBarItem onClick={() => navigate("/send")}>
        <ActionBarItemIcon>
          <RiSendPlaneFill />
        </ActionBarItemIcon>
        <span>Send / Request</span>
      </ActionBarItem>
      <ActionBarItem onClick={() => navigate("/receive")}>
        <ActionBarItemIcon>
          <LuArrowDownToLine />
        </ActionBarItemIcon>
        <span>Receive</span>
      </ActionBarItem>
    </ActionBarWrapper>
  );
};
