import useSWR from "swr";
import { Address } from "viem";
import { TransactionActivityData } from "../models/TransactionActivity";

export async function fetcher<JSON = object>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

const BASE_ENDPOINT = "https://stability-testnet.blockscout.com/api";

export const endpoints = {
  addressTokenTransfers:
    "/v2/addresses/$0/token-transfers?type=ERC-20%2CERC-721%2CERC-1155&token=$1",
} satisfies Record<string, string>;

export function getApiEndpoint(
  endpointName: keyof typeof endpoints,
  replace?: string[]
) {
  const endpoint = BASE_ENDPOINT + endpoints[endpointName];
  if (replace) {
    return endpoint.replace(/\$(\d+)/g, (_, index) => replace[index]);
  }
  return endpoint;
}

export function useAddressTransactions(
  address: Address | undefined,
  tokenAddress: Address
) {
  const { data, error, isLoading, mutate } = useSWR<{
    items?: TransactionActivityData[];
  }>(
    address
      ? getApiEndpoint("addressTokenTransfers", [address, tokenAddress])
      : undefined,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  if (data && data.items) {
    data.items = data.items.filter((tx) => tx.type == "token_transfer");
  }

  return {
    mutate,
    data,
    isLoading,
    isError: error,
  };
}
