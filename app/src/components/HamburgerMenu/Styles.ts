import styled from "styled-components";

export const HamburgerMenuWrapper = styled.div<{ isOpen?: boolean }>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${(props) =>
    props.isOpen ? "0" : `-${props.theme.viewport.phone.width}`};
  width: ${(props) => `calc(${props.theme.viewport.phone.width} - 5rem)`};
  z-index: 9999;
  background: ${(props) => props.theme.colors.neutralDark};
  border-top-left-radius: ${(props) => props.theme.spacing.large};
  border-bottom-left-radius: ${(props) => props.theme.spacing.large};
  padding: ${(props) => props.theme.spacing.large};
  transition: right 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const HamburgerMenuClose = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 1rem;

  > span {
    > svg {
      height: 2rem;
      width: auto;
      color: ${(props) => props.theme.bgBlue};
      cursor: pointer;
    }
  }
`;

export const HamburgerMenuContent = styled.div`
  margin: ${(props) => props.theme.spacing.xlarge} 0;
  width: 100%;
`;

export const HamburgerMenuBody = styled.div`
  width: 100%;
`;
