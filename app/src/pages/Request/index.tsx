import { UserIcon } from "../../components/UserIcon";
import { ButtonStyled } from "./Styles";
import { AddMemo } from "./components/AddMemo";
import { Quantity } from "./components/Quantity";
import { RequestAttribute } from "./components/RequestAttribute";

export const Request = () => {
  return <>
          <h1>REQUESTING</h1>
           <UserIcon name="gabriel.stability" letters="GS"/>
           <Quantity quantity={100}/>
           <AddMemo/>
           <RequestAttribute name="Stability Fee" value="0"/>
           <RequestAttribute name="Your total" value="15"/>
           <RequestAttribute name="Payment recieved" value="In Second"/>


           <ButtonStyled>CONFIRM</ButtonStyled>
           <ButtonStyled>cANCEL</ButtonStyled>
          </>
};