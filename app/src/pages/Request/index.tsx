import { useState } from "react";
import { usePaymentRequest } from "../../common/hooks/usePaymentRequest";
import { Button, ButtonNoFilled } from "../../components/Button";
import { UserIcon } from "../../components/UserIcon";
import { AttributeWrapper, ButtonWrapper, PageTitle, AddMemoWrapper } from "./Styles";
import { AddMemo } from "./components/AddMemo";
import { Quantity } from "./components/Quantity";
import { RequestAttribute } from "./components/RequestAttribute";
import { useRecoilState } from "recoil";
import { TransferState } from "../../common/State/Transfer";
import { waitForTransaction } from '@wagmi/core'
import { parseEther } from "viem";
import { LoadingIcon } from "../../components/LoadingIcon";

export const Request = () => {
  const [memo, setMemo] = useState('');
  const [ transferState ] = useRecoilState(TransferState);
  const [loading, setLoading] = useState(false);

  const { createRequest } = usePaymentRequest();



  const handleCreateRequest = async () => {
    if (!transferState.account || !transferState.formattedAmount) {
      console.log("no account or amount");
      return;
    }

    try {
      setLoading(true);
      const hash = await createRequest(
        transferState.account.address,
        parseEther(transferState.formattedAmount).toString(),
        memo,
      );

      const data = await waitForTransaction({hash});
        
      
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
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
              <Button onClick={handleCreateRequest}>
                { loading ? <LoadingIcon/> : "CONFIRM"}
              </Button>
              <ButtonNoFilled>CANCEL</ButtonNoFilled>
            </ButtonWrapper>

          </>
};
