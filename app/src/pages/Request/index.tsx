import { useState } from "react";
import { usePaymentRequest } from "../../common/hooks/usePaymentRequest";
import { Button, ButtonNoFilled } from "../../components/Button";
import { UserIcon } from "../../components/UserIcon";
import { AttributeWrapper, ButtonWrapper, PageTitle, AddMemoWrapper } from "./Styles";
import { AddMemo } from "./components/AddMemo";
import { Quantity } from "./components/Quantity";
import { RequestAttribute } from "./components/RequestAttribute";

export const Request = () => {
  const [memo, setMemo] = useState('');

  const { createRequest } = usePaymentRequest();

  const handleCreateRequest = () => {
    createRequest(
      "0x8eB92711aa4Fa5D54fD41dB4A47C012bD66783cF",
      "100",
      memo,
    );
  };

  return <>
          <PageTitle>REQUESTING</PageTitle>
           <UserIcon name="gabriel.stability" letters="GS"/>
           <Quantity quantity={100}/>
           <AddMemoWrapper>
            <AddMemo value={memo} onChange={(e) => setMemo(e.target.value)}/>
           </AddMemoWrapper>


           <AttributeWrapper>
            <RequestAttribute name="Fee" value="0"/>
            <RequestAttribute name="Total" value="15"/>
            <RequestAttribute name="Txn Completed" value="In Second"/>
           </AttributeWrapper>



            <ButtonWrapper>
              <Button onClick={handleCreateRequest}>CONFIRM</Button>
              <ButtonNoFilled>CANCEL</ButtonNoFilled>
            </ButtonWrapper>

          </>
};
