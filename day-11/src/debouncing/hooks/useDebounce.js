import { useEffect, useState } from 'react';

// value - influence the change of query
// delay - what dev specified, default value will be overriden if delay is passed from outside
export function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // whenever you are using setTimeout/setInterval etc clear them
    return () => clearTimeout(id);
  }, [value, delay]);

  return debouncedValue;
}
