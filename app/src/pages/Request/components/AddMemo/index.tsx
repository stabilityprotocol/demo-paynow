import { useState } from 'react';
import { MemoInputWrapper, MemoInput, MaxLengthLabel, PencilIcon, PlaceHolderWrapper, AddMemoLabel } from './Styles';

export const AddMemo = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <MemoInputWrapper>
      {!isFocused && 
        <PlaceHolderWrapper>
            <PencilIcon/>
            <AddMemoLabel>Add a memo</AddMemoLabel>
        </PlaceHolderWrapper>}
      <MemoInput 
        maxLength={100} 
        onFocus={() => setIsFocused(true)} 
        onBlur={() => setIsFocused(false)}
      />
      {!isFocused && <MaxLengthLabel>100 Max Characters</MaxLengthLabel>}
    </MemoInputWrapper>
  );
}