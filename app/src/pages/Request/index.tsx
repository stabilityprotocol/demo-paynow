import { Button, ButtonNoFilled } from "../../components/Button";
import { UserIcon } from "../../components/UserIcon";
import { AttributeWrapper, ButtonWrapper, PageTitle, AddMemoWrapper } from "./Styles";
import { AddMemo } from "./components/AddMemo";
import { Quantity } from "./components/Quantity";
import { RequestAttribute } from "./components/RequestAttribute";

export const Request = () => {
  return <>
          <PageTitle>REQUESTING</PageTitle>
           <UserIcon name="gabriel.stability" letters="GS"/>
           <Quantity quantity={100}/>
           <AddMemoWrapper>
            <AddMemo/>
           </AddMemoWrapper>


           <AttributeWrapper>
            <RequestAttribute name="Fee" value="0"/>
            <RequestAttribute name="Total" value="15"/>
            <RequestAttribute name="Txn Completed" value="In Second"/>
           </AttributeWrapper>



            <ButtonWrapper>
              <Button>CONFIRM</Button>
              <ButtonNoFilled>CANCEL</ButtonNoFilled>
            </ButtonWrapper>

          </>
};
