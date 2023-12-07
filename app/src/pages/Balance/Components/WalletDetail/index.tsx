import { useAccount } from "wagmi";
import {
  WalletDetailCircle,
  WalletDetailContent,
  WalletDetailCopy,
  WalletDetailInfo,
  WalletDetailWrapper,
} from "./Styles";
import { PiCopySimpleFill } from "react-icons/pi";
import { shortAddress } from "../../../../common/ETH";
import { useCopyToClipboard } from "usehooks-ts";

export const WalletDetail = () => {
  const { address } = useAccount();
  const [, copy] = useCopyToClipboard();

  if (!address) return null;

  return (
    <WalletDetailWrapper>
      <WalletDetailContent>
        <WalletDetailCircle />
        <WalletDetailInfo>
          <span className="title">Magic Wallet</span>
          <span>{shortAddress(address)}</span>
        </WalletDetailInfo>
      </WalletDetailContent>
      <WalletDetailCopy>
        <PiCopySimpleFill onClick={() => copy(address)} />
      </WalletDetailCopy>
    </WalletDetailWrapper>
  );
};
