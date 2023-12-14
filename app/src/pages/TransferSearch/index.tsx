import { useTheme } from "styled-components";
import { useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Input } from "../../components/Input";
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
import { getAddress, isAddress } from "viem";
import { useRecoilValue } from "recoil";
import { UserState } from "../../common/State/User";
import { useAccount } from "wagmi";

export const TransferSearch = () => {
  const { t } = useTranslation();
  const { address } = useAccount();
  const [value, setValue] = useState("");
  const theme = useTheme();
  const searchValue = useDebounce(value, 300);
  const { data } = useSimilarENSNames(searchValue);
  const { recentTransactions } = useRecoilValue(UserState);

  const recommendedAddresses = useMemo(() => {
    let addresses = (recentTransactions || [])
      .map((e) => e.items)
      .flat()
      .map((e) => [e.to.hash, e.from.hash])
      .flat();

    addresses = addresses
      .filter((e) => e.toLowerCase() !== address?.toLowerCase())
      .map((e) => e.toLowerCase());

    addresses = [...new Set(addresses)];

    return addresses.map((e) => getAddress(e)).slice(0, 6);
  }, [address, recentTransactions]);

  const Results = useMemo(
    () => () => {
      if (!data?.result) {
        return <RecentContacts addresses={recommendedAddresses} />;
      }
      if (data.result.length === 0 && isAddress(value)) {
        return <SearchResults entries={[{ address: value, name: "" }]} />;
      }
      return <SearchResults entries={data.result} />;
    },
    [data, recommendedAddresses, value]
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
        <Results />
      </ResultWrapper>
    </SearchWrapper>
  );
};
