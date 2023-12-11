import styled from "styled-components";
import { EnsEntry } from "../../common/models/EnsEntry";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { TransferState } from "../../common/State/Transfer";
import { shortAddress } from "../../common/ETH";

export const SearchResults = ({ entries }: { entries: EnsEntry[] }) => {
  const navigate = useNavigate();
  const setAccount = useSetRecoilState(TransferState);

  const onClick = useCallback(
    (entry: EnsEntry) => {
      setAccount({ account: entry });
      navigate(`address`);
    },
    [navigate, setAccount]
  );

  return (
    <SearchResultsWrapper>
      {entries.map((entry) => {
        const displayName = entry.name || shortAddress(entry.address);
        return (
          <SearchResultsItem onClick={() => onClick(entry)}>
            <AccountLogo>{displayName.slice(0, 2).toUpperCase()}</AccountLogo>
            <SearchResultsItemName>{displayName}</SearchResultsItemName>
          </SearchResultsItem>
        );
      })}
    </SearchResultsWrapper>
  );
};

const SearchResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${(p) => p.theme.spacing.medium};
  margin-top: ${(p) => p.theme.spacing.large};
`;

const SearchResultsItem = styled.div`
  color: ${(p) => p.theme.colors.primary};
  font-size: ${(p) => p.theme.fontSizes.large};
  text-align: left;
  display: flex;
  flex-direction: row;
  width: 100%;
  &:hover {
    cursor: pointer;
    transform: scale(1.01);
    border-radius: ${(p) => p.theme.box.borderRadius};
  }
`;

const SearchResultsItemName = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${(p) => p.theme.spacing.small};
  font-size: ${(p) => p.theme.fontSizes.medium};
  display: flex;
  align-items: center;
  text-indent: ${(p) => p.theme.spacing.medium};
  font-family: ${(p) => p.theme.font.secondary};
`;

const AccountLogo = styled.span`
  width: 20%;
  aspect-ratio: 1;
  font-size: ${(p) => p.theme.fontSizes.large};
  padding: ${(p) => p.theme.spacing.small};
  background: ${(p) => p.theme.colors.green0};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
