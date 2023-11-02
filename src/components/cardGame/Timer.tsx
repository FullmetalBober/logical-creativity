import { useEffect } from 'react';
import { useTimer } from '../hooks/useTimer';

export function Timer(props: {stopGame: boolean}) {
  const { seconds, running, start, stop } = useTimer();
  
  useEffect(() => {
    start();
  }, []);

  if(running && props.stopGame) stop();

  return (
    <p>
      {running && `Час проходження: ${seconds}c`}
      {props.stopGame && `Вітаємо з проходженням за ${seconds}с!`}
    </p>
  )
}
