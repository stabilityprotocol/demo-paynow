import { HeaderActionsWrapper, HeaderWrapper } from "./Styles";
import { ButtonSmallNoFill } from "../Button";
import { IoDocumentSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { Web3Controls } from "./Web3Controls";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeaderWrapper>
        <HeaderActionsWrapper>
          <ButtonSmallNoFill onClick={() => window.open(t("links.docs"))}>
            {t("components.header.docs")}
            <IoDocumentSharp />
          </ButtonSmallNoFill>
          <Web3Controls />
        </HeaderActionsWrapper>
      </HeaderWrapper>
    </>
  );
};
