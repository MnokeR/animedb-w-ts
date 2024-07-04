import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, delay: number) => {
  const [debouncedValue, setDeboucedValue] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDeboucedValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
