import { ChangeEvent, TextareaHTMLAttributes, useState } from 'react';
import { MemoInputWrapper, MemoInput, MaxLengthLabel, PencilIcon, PlaceHolderWrapper, AddMemoLabel } from './Styles';

export const AddMemo = (
  props: TextareaHTMLAttributes<HTMLTextAreaElement>
) => {
  const [isFocused, setIsFocused] = useState(false);
  const [memo, setMemo] = useState('');

  const handleMemoChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(e.target.value);
    props.onChange && props.onChange(e);
  }

  return (
    <MemoInputWrapper>
      {(!isFocused && memo === "") && 
        <PlaceHolderWrapper>
            <PencilIcon/>
            <AddMemoLabel>Optional: Add a memo</AddMemoLabel>
        </PlaceHolderWrapper>}
      <MemoInput {...props}
        maxLength={100} 
        onFocus={() => setIsFocused(true)} 
        onBlur={() => setIsFocused(false)}
        onChange={handleMemoChange}
      />
      {(!isFocused && memo === "")&& <MaxLengthLabel>100 Max Characters</MaxLengthLabel>}
    </MemoInputWrapper>
  );
}