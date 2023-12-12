import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { CacheState } from "../State/PersistentCache";

export const useCache = (namespace: string) => {
  const [cache, setCache] = useRecoilState(CacheState);

  const get = useCallback(
    (key: string) => {
      const cacheNamespace = cache[namespace];
      if (!cacheNamespace) return null;
      const cacheEntry = cacheNamespace[key];
      if (cacheEntry === undefined || cacheEntry.expires < Date.now()) {
        return null;
      }
      return cacheEntry.value;
    },
    [cache, namespace]
  );

  const has = useCallback(
    (key: string) => {
      const cacheInstance = cache[namespace];
      if (!cacheInstance) return null;
      const cacheEntry = cacheInstance[key];
      return cacheEntry !== undefined && cacheEntry.expires >= Date.now();
    },
    [cache, namespace]
  );

  const set = useCallback(
    (key: string, value: string, ttlInSeconds: number = 3600) => {
      setCache((prev) => ({
        ...prev,
        [namespace]: {
          ...prev[namespace],
          [key]: { value, expires: Date.now() + 1000 * ttlInSeconds },
        },
      }));
    },
    [setCache, namespace]
  );

  return { get, has, set };
};
