import { useCallback, useEffect, useState } from 'react';

const interval = (delay = 0) => (callback: () => void) =>
  useEffect(() => {
    const id = setInterval(callback, delay);
    return () => clearInterval(id);
  }, [callback]);

const useSecondsInterval = interval(1000);

export const useTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState<Boolean>();

  const tick = useCallback(
    () => (running ? setSeconds((seconds) => seconds + 1) : undefined),
    [running]
  );
  const start = () => setRunning(true);
  const stop = () => setRunning(false);

  useSecondsInterval(tick);

  return { running, seconds, start, stop };
};
