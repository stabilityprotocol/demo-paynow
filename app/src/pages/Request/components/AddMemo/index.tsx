import { ChangeEvent, TextareaHTMLAttributes, useState } from 'react';
import { MemoInputWrapper, MemoInput, MaxLengthLabel, PencilIcon, PlaceHolderWrapper, AddMemoLabel } from './Styles';
import { useTranslation } from 'react-i18next';

export const AddMemo = (
  props: TextareaHTMLAttributes<HTMLTextAreaElement>
) => {
  const [isFocused, setIsFocused] = useState(false);
  const [memo, setMemo] = useState('');
  const { t } = useTranslation();

  const handleMemoChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(e.target.value);
    props.onChange && props.onChange(e);
  }

  return (
    <MemoInputWrapper>
      {(!isFocused && memo === "") && 
        <PlaceHolderWrapper>
            <PencilIcon/>
            <AddMemoLabel>{t("pages.request.placeholder")}</AddMemoLabel>
        </PlaceHolderWrapper>}
      <MemoInput {...props}
        maxLength={100} 
        onFocus={() => setIsFocused(true)} 
        onBlur={() => setIsFocused(false)}
        onChange={handleMemoChange}
      />
      {(!isFocused && memo === "")&& <MaxLengthLabel>{t("pages.request.max-characters")}</MaxLengthLabel>}
    </MemoInputWrapper>
  );
}