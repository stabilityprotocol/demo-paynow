import styled from "styled-components";
import { EnsEntry } from "../../common/models/EnsEntry";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { TransferState } from "../../common/State/Transfer";
import { shortAddress } from "../../common/ETH";
import { useCopyToClipboard } from "usehooks-ts";
import { FaCopy } from "react-icons/fa";
import { getUsernameInitials } from "../../common/Utils";

export const SearchResults = ({ entries }: { entries: EnsEntry[] }) => {
  const navigate = useNavigate();
  const setAccount = useSetRecoilState(TransferState);
  const [, setCopied] = useCopyToClipboard();

  const onClick = useCallback(
    (entry: EnsEntry) => {
      setAccount({ account: entry });
      navigate(`/transfer/amount`);
    },
    [navigate, setAccount]
  );

  return (
    <SearchResultsWrapper>
      {entries.map((entry) => {
        const displayName = entry.name ? `${entry.name}.stability` : null;
        const address = shortAddress(entry.address);
        return (
          <SearchResultsItem onClick={() => onClick(entry)}>
            <AccountLogo>{getUsernameInitials(displayName)}</AccountLogo>
            <SearchResultsItemName>
              <FlexSpan>{displayName}</FlexSpan>
              <FlexSpan>
                {address}
                <CopyIcon
                  onClick={(e: MouseEvent) => {
                    e.stopPropagation();
                    setCopied(entry.address);
                  }}
                />
              </FlexSpan>
            </SearchResultsItemName>
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
    transform: scale(1.005);
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

export const CopyIcon = styled(FaCopy)`
  color: ${(p) => p.theme.colors.buttons.primary};
  &:focus,
  &:hover {
    color: ${(p) => p.theme.colors.buttons.primaryHover};
  }
`;

export const FlexSpan = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${(p) => p.theme.spacing.small};
`;
