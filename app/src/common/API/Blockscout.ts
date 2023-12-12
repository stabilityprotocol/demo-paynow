import useSWR from "swr";
import { Address } from "viem";

export interface TransactionActivityData {
  type: string;
  timestamp: string;
  to: { hash: string };
  from: { hash: string };
  token: {
    name: string;
    symbol: string;
    decimals: string;
  };
  total: {
    decimals: string;
    value: string;
  };
}

export async function fetcher<JSON = object>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

const BASE_ENDPOINT = "https://stability-testnet.blockscout.com/api";

export const endpoints = {
  addressTokenTransfers: "/v2/addresses/$1/token-transfers",
} satisfies Record<string, string>;

export function getApiEndpoint(
  endpointName: keyof typeof endpoints,
  replace?: string,
  query?: string
) {
  let endpoint = BASE_ENDPOINT + endpoints[endpointName];

  if (query) {
    endpoint = endpoint + "?" + query;
  }
  if (replace) {
    return endpoint.replace("$1", replace);
  }
  return endpoint;
}

export function useAddressTransactions(
  address: Address,
  tokenAddress: Address
) {
  const { data, error, isLoading } = useSWR<{
    items: TransactionActivityData[];
  }>(
    getApiEndpoint(
      "addressTokenTransfers",
      address,
      `type=ERC-20%2CERC-721%2CERC-1155&token=${tokenAddress}`
    ),
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  if (data) {
    data.items = data.items.filter((tx) => tx.type == "token_transfer");
  }

  return {
    data,
    isLoading,
    isError: error,
  };
}
