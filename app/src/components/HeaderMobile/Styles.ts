import styled from "styled-components";

export const HeaderMobileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  width: 95%;
  padding: ${(props) => props.theme.spacing.small}
    ${(props) => props.theme.spacing.medium};
  border-radius: ${(props) => props.theme.box.borderRadius};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  background: rgba(255, 255, 255, 0.8);
  margin-top: 1rem;

  > svg,
  > img {
    height: 80%;
    width: auto;
    color: ${(props) => props.theme.colors.green1};
    cursor: pointer;
  }
`;
