import styled from 'styled-components';
import { PiNotePencilFill } from "react-icons/pi";


export const MemoInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.box.borderRadius};
  height: 100%;
  position: relative;
  font-weight: 400;
`;

export const PencilIcon = styled(PiNotePencilFill)`
  color: ${(props) => props.theme.colors.dark0};
  font-size: ${(props) => props.theme.fontSizes.xlarge};
`;

export const PlaceHolderWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: left;
    padding: ${(props) => props.theme.spacing.small};
    font-size: ${(props) => props.theme.fontSizes.small};
    gap: ${(props) => props.theme.spacing.small};
    position: absolute;
    pointer-events: none;
`;

export const AddMemoLabel = styled.span`
  font-family: ${(props) => props.theme.font.secondary};
`;

export const MaxLengthLabel = styled.span`
  font-size: ${(props) => props.theme.fontSizes.small};
  font-family: ${(props) => props.theme.font.secondary};
  color: ${(props) => props.theme.colors.dark1};
  position: absolute;
  bottom: ${(props) => props.theme.spacing.small};
  right: ${(props) => props.theme.spacing.small};
  pointer-events: none;
`;

export const MemoInput = styled.textarea`
  font-family: ${(props) => props.theme.font.secondary};
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.dark1};
  background-color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: ${(props) => props.theme.box.borderRadius};
  padding: ${(props) => props.theme.spacing.small};
  margin: ${(props) => props.theme.spacing.small} 0;
  width: 100%;
  height: 100%;
  resize: none;
  
  &::placeholder {
    color: ${(props) => props.theme.colors.dark0};
  }

  &:focus {
    outline: none;
  }
`;