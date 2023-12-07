import styled from "styled-components";

export const WalletDetailWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.colors.green0};
  border-radius: ${(props) => props.theme.box.borderRadius};
  padding: ${(props) => props.theme.spacing.small};
  font-family: ${(props) => props.theme.font.secondary};
  font-size: ${(props) => props.theme.fontSizes.small};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const WalletDetailContent = styled.div`
  display: flex;
  align-items: center;
`;

export const WalletDetailCircle = styled.span`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.black};
  margin-right: ${(props) => props.theme.spacing.small};
`;

export const WalletDetailInfo = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > .title {
    font-weight: 800;
  }
`;

export const WalletDetailCopy = styled.span`
  > svg {
    width: 1.5rem;
    height: auto;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 0.6;
    }
  }
`;
