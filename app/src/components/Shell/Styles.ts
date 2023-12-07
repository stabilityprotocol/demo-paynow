import styled from "styled-components";
import { mediaSizes } from "../../common/Theme";

export const ShellWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
  max-width: 100vw;
  padding: ${(props) => props.theme.spacing.large} 0 0 0;

  @media ${mediaSizes.portableQuery} {
    padding: 0;
  }
`;
