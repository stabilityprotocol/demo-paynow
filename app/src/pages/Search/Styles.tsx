import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const SearchSectionTitle = styled.h1`
  font-family: ${(props) => props.theme.font.primary};
  font-weight: 500;
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  margin-bottom: ${(props) => props.theme.spacing.large};
`;

export const InputWrapper = styled.span`
  margin-top: ${(p) => p.theme.spacing.large};
  width: 80%;
  background-color: #fff;
  border-radius: ${(p) => p.theme.box.borderRadius};
  input {
    font-family: ${(p) => p.theme.font.secondary};
  }
`;

export const ResultWrapper = styled.div`
  width: 80%;
  border-radius: ${(p) => p.theme.box.borderRadius};
  margin-top: ${(p) => p.theme.spacing.large};
`;
