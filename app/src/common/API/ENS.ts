import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { Address } from "viem";
import { EnsEntry } from "../models/EnsEntry";

export async function fetcher<JSON = object>(
  url: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  return fetch(url, init).then((res) => res.json());
}

type PostFetcherArgs = { arg: { address: Address; name: string } };

export async function postFetcher<JSON = object>(
  url: RequestInfo,
  args: PostFetcherArgs
): Promise<JSON> {
  return fetch(url, {
    body: JSON.stringify(args.arg),
    method: "POST",
    headers: { "content-type": "application/json" },
  }).then((res) => res.json());
}

const BASE_ENDPOINT = "https://vmfathvnna.us-east-2.awsapprunner.com/v1/ens";

export const endpoints = {
  register: "/",
  search: "/search?value=$1",
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

export function useRegisterEns() {
  const { data, error, isMutating, trigger } = useSWRMutation(
    getApiEndpoint("register"),
    postFetcher,
    {
      revalidate: false,
      populateCache: true,
    }
  );

  return {
    data,
    isError: error,
    isMutating,
    trigger,
  };
}

export interface SimilarEnsEntryDTO {
  result: EnsEntry[];
  status: "ok";
}

export function useSimilarENSNames(search: string) {
  const isValid = search.length > 0;

  const { data, error, isLoading } = useSWR<SimilarEnsEntryDTO>(
    isValid ? getApiEndpoint("search", search) : null,
    fetcher,
    {
      refreshInterval: 5_000,
    }
  );

  if (search === "") {
    return {
      data: { result: null },
      isLoading: false,
      isError: false,
    };
  }

  return {
    data,
    isLoading,
    isError: error,
  };
}
