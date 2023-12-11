import { useTheme } from "styled-components";
import { useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Input } from "../../components/Input";
import { EnsEntry } from "../../common/models/EnsEntry";
import { RecentContacts } from "./RecentContacts";
import {
  InputWrapper,
  ResultWrapper,
  SearchSectionTitle,
  SearchWrapper,
} from "./Styles";
import { useTranslation } from "react-i18next";
import { SearchResults } from "./SearchResults";

export const Search = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState("");
  const theme = useTheme();

  const showSearchResults = useMemo(() => {
    return value.length > 0;
  }, [value]);

  //@todo To be replaced with actual data
  const entries: EnsEntry[] = useMemo(
    () => [
      { name: "john.smith.stability", address: "0xjhehf" },
      { name: "john.smith.stability", address: "0xjhehf" },
      { name: "john.smith.stability", address: "0xjhehf" },
      { name: "john.smith.stability", address: "0xjhehf" },
    ],
    []
  );

  return (
    <SearchWrapper>
      <SearchSectionTitle>{t("pages.search.title")}</SearchSectionTitle>
      <InputWrapper>
        <Input
          icon={<FaSearch />}
          value={value}
          onChange={(v) => setValue(v)}
          placeholder={t("pages.search.placeholder")}
          background={theme.colors.white}
          color={theme.colors.black}
        />
      </InputWrapper>
      <ResultWrapper>
        {showSearchResults ? (
          <SearchResults entries={entries} />
        ) : (
          <RecentContacts entries={entries}></RecentContacts>
        )}
      </ResultWrapper>
    </SearchWrapper>
  );
};
