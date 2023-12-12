import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { CacheState } from "../State/EnsCache";

export const useCache = (namespace: string) => {
  const [cache, setCache] = useRecoilState(CacheState);

  const get = useCallback(
    (key: string) => {
      return cache[`${namespace}.${key}`] ? cache[`${namespace}.${key}`] : null;
    },
    [cache, namespace]
  );

  const has = useCallback(
    (key: string) => {
      return !!cache[`${namespace}.${key}`];
    },
    [cache, namespace]
  );

  const set = useCallback(
    (key: string, value: string) => {
      setCache((prev) => ({ ...prev, [`${namespace}.${key}`]: value }));
    },
    [setCache, namespace]
  );

  return { get, has, set };
};
