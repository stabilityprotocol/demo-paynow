import styled from "styled-components";
import { EnsEntry } from "../../common/models/EnsEntry";
import React, { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { TransferState } from "../../common/State/Transfer";
import { UserIcon } from "../../components/UserIcon";
import { shortAddress } from "../../common/ETH";
import { getUsernameInitials } from "../../common/Utils";
import { useTranslation } from "react-i18next";
import { Address } from "viem";
import { useEnsName } from "../../common/hooks/useEnsName";

export const RecentContacts = ({ addresses }: { addresses: Address[] }) => {
  const navigate = useNavigate();
  const setAccount = useSetRecoilState(TransferState);
  const { t } = useTranslation();

  const onClick = useCallback(
    (entry: EnsEntry) => {
      setAccount({ account: entry });
      navigate(`/transfer/amount`);
    },
    [navigate, setAccount]
  );

  return (
    <RecentContactsWrapper>
      <RecentsContactsTitle>
        {t("pages.search.recentContacts.title")}
      </RecentsContactsTitle>
      <RecentContactsList>
        {addresses.map((entry, i) => {
          return (
            <RecentContactsListItem key={i}>
              <UserIconWrapper address={entry} onClick={onClick} />
            </RecentContactsListItem>
          );
        })}
      </RecentContactsList>
    </RecentContactsWrapper>
  );
};

const UserIconWrapper: React.FC<{
  address: Address;
  onClick: (entry: EnsEntry) => void;
}> = ({ address, onClick }) => {
  const data = useEnsName(address);

  const displayName = useMemo(() => {
    if (!data) {
      return shortAddress(address);
    }
    return `${data}.stability`;
  }, [address, data]);

  return (
    <span onClick={() => onClick({ address, name: displayName })}>
      <UserIcon name={displayName} letters={getUsernameInitials(displayName)} />
    </span>
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
  flex-wrap: wrap;
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
  width: 33%;
`;
