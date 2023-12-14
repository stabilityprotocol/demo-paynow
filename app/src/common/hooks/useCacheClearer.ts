import { useRecoilState } from "recoil";
import { CacheState } from "../State/PersistentCache";
import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

const LastCacheUpdate = 1702542453657;

export const useCacheClearer = () => {
  const [, setCache] = useRecoilState(CacheState);
  const [lastCacheClearTsString, setLastCacheClearTs] = useLocalStorage(
    "last-cache-clear-ts",
    "0"
  );

  const lastCacheClearTs = parseInt(lastCacheClearTsString);

  useEffect(() => {
    if (lastCacheClearTs < LastCacheUpdate) {
      setCache({});
      setLastCacheClearTs(LastCacheUpdate.toString());
    }
  }, [lastCacheClearTs, setCache, setLastCacheClearTs]);
};
