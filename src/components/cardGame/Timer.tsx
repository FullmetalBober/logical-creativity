import { useEffect } from 'react';
import { useTimer } from '../../hooks/useTimer';

export function Timer(props: { stop: boolean }) {
  const { seconds, running, start, stop, reset } = useTimer();

  useEffect(() => {
    if (!props.stop) {
      reset()
      start();
    }
  }, [props.stop]);

  if (running && props.stop) stop();

  return (
    <p>
      {seconds != 0 &&
        <>
          {running && `Your game time: ${seconds}c`}
          {props.stop && `The timer was stopped here: ${seconds}с`}
        </>
      }
    </p>
  )
}
