import styled from "styled-components";
import { mediaSizes } from "../../common/Theme";

export const ShellWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100dvh;
  min-width: 100vw;
  max-width: 100vw;

  @media ${mediaSizes.portableQuery} {
    padding: 0;
  }
`;
