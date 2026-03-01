import { useEffect, useState } from "react";

/**
 * Custom hook to check if embedded forms are cached
 * Returns cached status and a function to manually trigger caching
 */
export function useFormCache(formUrl?: string) {
  const [isCached, setIsCached] = useState<boolean>(false);
  const [isChecking, setIsChecking] = useState<boolean>(true);

  useEffect(() => {
    if (!formUrl) {
      setIsChecking(false);
      return;
    }

    checkCache();
  }, [formUrl]);

  const checkCache = async () => {
    if (!("caches" in window) || !formUrl) {
      setIsChecking(false);
      return;
    }

    try {
      const cache = await caches.open("dcore-forms-v1");
      const response = await cache.match(formUrl);
      setIsCached(!!response);
    } catch (error) {
      console.warn("Error checking form cache:", error);
      setIsCached(false);
    } finally {
      setIsChecking(false);
    }
  };

  const cacheForm = async () => {
    if (!("caches" in window) || !formUrl) return;

    try {
      const cache = await caches.open("dcore-forms-v1");
      await cache.add(formUrl);
      setIsCached(true);
    } catch (error) {
      console.error("Error caching form:", error);
    }
  };

  return { isCached, isChecking, cacheForm };
}
