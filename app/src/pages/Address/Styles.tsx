import { FaPaperPlane } from "react-icons/fa6";
import { AiFillThunderbolt } from "react-icons/ai";

import styled from "styled-components";

export const AddressSectionTitle = styled.h1`
  color: ${(p) => p.theme.colors.primary};
  font-size: ${(p) => p.theme.fontSizes.large};
`;

export const AddressSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const AddressInformationWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${(p) => p.theme.spacing.large};
  * {
    font-family: ${(p) => p.theme.font.secondary};
  }
`;

export const AccountLogo = styled.span`
  width: 30%;
  aspect-ratio: 1;
  font-size: ${(p) => p.theme.fontSizes.xlarge};
  padding: ${(p) => p.theme.spacing.small};
  background: ${(p) => p.theme.colors.green0};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AccountName = styled.span`
  margin-top: ${(p) => p.theme.spacing.medium};
  font-family: ${(p) => p.theme.font.secondary};
`;

export const TokenInputWrapper = styled.span`
  width: 80%;
  margin-top: ${(p) => p.theme.spacing.large};
  display: flex;
  flex-direction: column;
  text-indent: ${(p) => p.theme.spacing.xsmall};
  input {
    font-family: ${(p) => p.theme.font.secondary};
  }
`;

export const TokenBalanceAmount = styled.span`
  margin-top: ${(p) => p.theme.spacing.small};
  font-size: ${(p) => p.theme.fontSizes.medium};
`;

export const LightText = styled.span`
  color: ${(p) => p.theme.colors.neutralDarker};
  font-size: ${(p) => p.theme.fontSizes.small};
`;

export const ColouredText = styled.span<{ color: string }>`
  color: ${(p) => p.color};
`;

export const ActionButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: ${(p) => p.theme.spacing.large};
  gap: ${(p) => p.theme.spacing.medium};
  > button {
    padding: ${(p) => p.theme.spacing.medium} ${(p) => p.theme.spacing.small};
    font-size: ${(p) => p.theme.fontSizes.small};
    width: 45%;
    color: ${(p) => p.theme.colors.neutral};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const WhiteSendIcon = styled(FaPaperPlane)`
  color: ${(p) => p.theme.colors.white} !important;
  font-size: ${(p) => p.theme.fontSizes.large};
`;

export const WhiteThunderboltIcon = styled(AiFillThunderbolt)`
  color: ${(p) => p.theme.colors.white} !important;
  font-size: ${(p) => p.theme.fontSizes.large};
`;
