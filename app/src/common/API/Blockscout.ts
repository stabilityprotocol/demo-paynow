import useSWR from "swr";
import { Address, Transaction } from "viem";

export async function fetcher<JSON = object>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

const BASE_ENDPOINT = "https://stability-testnet.blockscout.com/api";

export const endpoints = {
  addressTransactions: "/v2/addresses/$1/transactions",
} satisfies Record<string, string>;

export function getApiEndpoint(
  endpointName: keyof typeof endpoints,
  replace?: string
) {
  const endpoint = BASE_ENDPOINT + endpoints[endpointName];
  if (replace) {
    return endpoint.replace("$1", replace);
  }
  return endpoint;
}

export function useAddressTransactions(address: Address) {
  const { data, error, isLoading } = useSWR<{ result: Transaction[] }>(
    getApiEndpoint("addressTransactions", address),
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  return {
    data,
    isLoading,
    isError: error,
  };
}
