import styled from "styled-components";


export const UserIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const UserIconCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.green0};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.fontSizes.xxlarge};
`