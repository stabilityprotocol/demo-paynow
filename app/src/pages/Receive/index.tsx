import QR from "easyqrcodejs";
import { useEffect, useRef, useState } from "react";
import { useAccount } from "wagmi";
import logo from "../../assets/cube-green.svg";
import { Theme } from "../../common/Theme";
import {
  ReceiveActionWrapper,
  ReceiveQrWrapper,
  ReceiveSubTitle,
  ReceiveTitle,
  ReceiveWrapper,
} from "./Styles";
import { ButtonSmallAction } from "../../components/Button";
import { PiCopySimpleFill } from "react-icons/pi";
import { useCopyToClipboard } from "usehooks-ts";
import { useERC20 } from "../../common/hooks/useERC20";

export const Receive = () => {
  const { symbol } = useERC20();
  const { address } = useAccount();
  const [qr, setQr] = useState<QR | undefined>();
  const [, copy] = useCopyToClipboard();
  const [copyText, setCopyText] = useState<"Copy Address" | "Copied!">(
    "Copy Address"
  );
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (qr) return;
    const gen = new QR(ref.current, {
      text: address,
      height: 200,
      width: 200,
      logo,
      logoWidth: 50,
      logoHeight: 50,
      logoBackgroundColor: Theme.colors.bgGreen,
    });
    setQr(gen);
  }, [address, qr]);

  useEffect(() => {
    const matches = ref.current?.querySelectorAll("canvas");
    if (!matches) return;
    if (matches.length > 1) {
      matches[1].remove();
    }
  }, [ref]);

  const onCopy = () => {
    copy(address ?? "");
    setCopyText("Copied!");
    setTimeout(() => {
      setCopyText("Copy Address");
    }, 2_000);
  };

  if (!address) return null;

  return (
    <ReceiveWrapper>
      <ReceiveTitle>RECEIVE</ReceiveTitle>
      <ReceiveQrWrapper>
        <span ref={ref} />
      </ReceiveQrWrapper>
      <ReceiveActionWrapper>
        <ButtonSmallAction onClick={onCopy}>
          <span>{copyText}</span>
          <PiCopySimpleFill />
        </ButtonSmallAction>
      </ReceiveActionWrapper>
      <ReceiveSubTitle>
        This is an Stability wallet. Only send {symbol} or other ERC-20 tokens
        to this wallet.
      </ReceiveSubTitle>
    </ReceiveWrapper>
  );
};
