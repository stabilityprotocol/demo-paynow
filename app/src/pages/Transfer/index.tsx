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
import { isAddress } from "viem";

export const Transfer = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState("");
  const theme = useTheme();
  const searchValue = useDebounce(value, 300);
  const { data } = useSimilarENSNames(searchValue);

  //@todo To be replaced with actual data
  const entries: EnsEntry[] = useMemo(
    () => [
      {
        name: "john.smith",
        address: "0x56C47B7a680eadF25b49C3B0695482Dbe7927FcF",
      },
      {
        name: "john.smith",
        address: "0x56C47B7a680eadF25b49C3B0695482Dbe7927FcF",
      },
      {
        name: "john.smith",
        address: "0x56C47B7a680eadF25b49C3B0695482Dbe7927FcF",
      },
      {
        name: "john.smith",
        address: "0x56C47B7a680eadF25b49C3B0695482Dbe7927FcF",
      },
    ],
    []
  );

  const Results = useMemo(() => {
    if (!data?.result) {
      return <RecentContacts entries={entries} />;
    }
    if (data.result.length === 0 && isAddress(value)) {
      return <SearchResults entries={[{ address: value, name: "" }]} />;
    }
    return <SearchResults entries={data.result} />;
  }, [data?.result, entries, value]);

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
      <ResultWrapper>{Results}</ResultWrapper>
    </SearchWrapper>
  );
};
