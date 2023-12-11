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
import { useDebounce } from "usehooks-ts";
import { useSimilarENSNames } from "../../common/API/ENS";

export const Search = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState("");
  const theme = useTheme();
  const searchValue = useDebounce(value, 500);
  const { data } = useSimilarENSNames(searchValue);

  const showSearchResults = useMemo(() => {
    return data?.result;
  }, [data?.result]);

  //@todo To be replaced with actual data
  const entries: EnsEntry[] = useMemo(
    () => [
      {
        name: "john.smith.stability",
        address: "0x56C47B7a680eadF25b49C3B0695482Dbe7927FcF",
      },
      {
        name: "john.smith.stability",
        address: "0x56C47B7a680eadF25b49C3B0695482Dbe7927FcF",
      },
      {
        name: "john.smith.stability",
        address: "0x56C47B7a680eadF25b49C3B0695482Dbe7927FcF",
      },
      {
        name: "john.smith.stability",
        address: "0x56C47B7a680eadF25b49C3B0695482Dbe7927FcF",
      },
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
          <SearchResults entries={data!.result ?? []} />
        ) : (
          <RecentContacts entries={entries}></RecentContacts>
        )}
      </ResultWrapper>
    </SearchWrapper>
  );
};
