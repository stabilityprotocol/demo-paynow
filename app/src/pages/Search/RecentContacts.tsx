import styled from "styled-components";
import { EnsEntry } from "../../common/models/EnsEntry";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { TransferState } from "../../common/State/Transfer";
import { UserIcon } from "../../components/UserIcon";
import { shortAddress } from "../../common/ETH";

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
        {entries.map((entry, i) => {
          const displayName = entry.name || shortAddress(entry.address);

          return (
            <RecentContactsListItem key={i} onClick={() => onClick(entry)}>
              <UserIcon
                name={displayName}
                letters={displayName.slice(0, 2).toUpperCase()}
              ></UserIcon>
            </RecentContactsListItem>
          );
        })}
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
  font-family: ${(p) => p.theme.font.secondary};
`;

const RecentContactsList = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${(p) => p.theme.spacing.small};
`;

const RecentContactsListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${(p) => p.theme.spacing.medium};
  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }
  width: 25%;
`;
