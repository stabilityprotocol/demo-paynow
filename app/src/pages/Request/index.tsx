import { useMemo, useState } from "react";
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
import { shortAddress } from "../../common/ETH";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Request = () => {
  const [memo, setMemo] = useState('');
  const [ transferState ] = useRecoilState(TransferState);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { t } = useTranslation();
  const { createRequest } = usePaymentRequest();


  const displayName = useMemo(() => {
    return transferState.account?.name
      ? `${transferState.account.name}.stability`
      : shortAddress(transferState.account!.address);
  }, [transferState]);



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

      await waitForTransaction({hash});  

      setLoading(false);
      navigate("/balance");
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };


  return <>
          <PageTitle>{t("pages.request.title")}</PageTitle>
          <UserIcon
            name={displayName}
            letters={displayName.slice(0, 2).toUpperCase()}
           />
          {transferState.account?.name && shortAddress(transferState.account!.address)}
           <Quantity quantity={transferState.formattedAmount ?? ""}/>
           <AddMemoWrapper>
            <AddMemo value={memo} onChange={(e) => setMemo(e.target.value)} disabled={loading} />
           </AddMemoWrapper>


           <AttributeWrapper>
            <RequestAttribute name={t("pages.request.atributes.fee")} value="0"/>
            <RequestAttribute name={t("pages.request.atributes.total")} value={transferState.formattedAmount ?? ""}/>
            <RequestAttribute name={t("pages.request.atributes.txn-completed")} value="In Second"/>
           </AttributeWrapper>



            <ButtonWrapper>
              <Button onClick={!loading ?  handleCreateRequest : undefined}>
                { loading ? <LoadingIcon/> : t("pages.request.confirm")}
              </Button>
              <ButtonNoFilled onClick={() => (!loading ?  navigate(-1) : undefined)}>{t("pages.request.cancel")}</ButtonNoFilled>
            </ButtonWrapper>

          </>
};
