import { useEffect, useRef, useState } from 'react';

// we get the value we are going to throttle
// this value is going to change at most once within this particular time frame (delay)
export function useThrottle(value, delay = 300) {
  const [throttledValue, setThrottledValue] = useState(value);
  // we tract when this value was last changed
  const lastExecuted = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(
      () => {
        const now = Date.now();

        if (now - lastExecuted.current >= delay) {
          console.log('Do DOM Manipulation');
          setThrottledValue(value);
          lastExecuted.current = now;
        }
      },
      delay - (Date.now() - lastExecuted.current),
    );

    return () => clearTimeout(handler);
  }, [value, delay]);

  return throttledValue;
}
