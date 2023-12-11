import styled from "styled-components";
import { EnsEntry } from "../../common/models/EnsEntry";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { TransferState } from "../../common/State/Transfer";

export const RecentContacts = ({ entries }: { entries: EnsEntry[] }) => {
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
    <RecentContactsWrapper>
      <RecentsContactsTitle>Recent Contacts</RecentsContactsTitle>
      <RecentContactsList>
        {entries.map((entry) => (
          <RecentContactsListItem
            key={entry.address}
            onClick={() => onClick(entry)}
          >
            <RecentContactsListItemImage>JS</RecentContactsListItemImage>
            <RecentContactsListItemName>
              {entry.name}
            </RecentContactsListItemName>
          </RecentContactsListItem>
        ))}
      </RecentContactsList>
    </RecentContactsWrapper>
  );
};

const RecentContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: ${(p) => p.theme.spacing.large};
`;

const RecentsContactsTitle = styled.h1`
  color: ${(p) => p.theme.colors.primary};
  font-size: ${(p) => p.theme.fontSizes.large};
  text-align: left;
`;

const RecentContactsList = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${(p) => p.theme.spacing.small};
`;

const RecentContactsListItem = styled.div`
  flex: 0 0 27.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${(p) => p.theme.spacing.medium};
  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;

const RecentContactsListItemImage = styled.span`
  width: 100%;
  aspect-ratio: 1;
  font-size: ${(p) => p.theme.fontSizes.large};
  padding: ${(p) => p.theme.spacing.medium};
  background: ${(p) => p.theme.colors.green0};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RecentContactsListItemName = styled.span`
  text-align: center;
  max-width: 100%;
  word-break: break-word;
  display: inline-block;
`;
