import { useTheme } from "styled-components";
import { useEffect, useMemo, useState } from "react";
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
import { getAddress, isAddress } from "viem";
import { useRecoilValue } from "recoil";
import { UserState } from "../../common/State/User";
import { useENS } from "../../common/hooks/useENS";
import { useAccount } from "wagmi";

export const TransferSearch = () => {
  const { t } = useTranslation();
  const { address } = useAccount();
  const [value, setValue] = useState("");
  const theme = useTheme();
  const searchValue = useDebounce(value, 300);
  const { data } = useSimilarENSNames(searchValue);
  const { recentTransactions } = useRecoilValue(UserState);
  const [entries, setEntries] = useState<EnsEntry[]>([]);
  const { getNameByAddress } = useENS();

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

  useEffect(() => {
    if (!recommendedAddresses) return;

    const promises = recommendedAddresses.map(async (e) => ({
      name: (await getNameByAddress(e)) ?? "",
      address: e,
    }));

    Promise.all(promises).then((entries) => setEntries(entries));
  }, [getNameByAddress, recommendedAddresses]);

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
