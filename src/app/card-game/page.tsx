'use client';
import { Button } from '@nextui-org/button';
import { useEffect } from 'react';
import Board from '@/components/cardGame/Board';
import { useAppSelector, useAppDispatch } from '@/store';
import { stopGame, startGame } from '@/store/board-slice';
import { Timer } from '@/components/cardGame/Timer';

export default function Home() {
  const { gameRunning, foundCount } = useAppSelector((state) => state.board);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(stopGame(false));
  }, [foundCount])


  function handleClick() {
    gameRunning ? dispatch(stopGame(true)) : dispatch(startGame())
  }

  console.log(foundCount);
  return (
    <main className='flex flex-col items-center justify-center'>
      <p>
        {!gameRunning && 'Would you like to play a card game?'}
        {gameRunning && 'The game has started. Good luck!'}
      </p>
      <Button className='m-4' onClick={handleClick}>{gameRunning ? 'Finish the game' : 'Start a new game'}</Button>
      {gameRunning &&
        <Board />
      }
      <Timer stop={!gameRunning} />
    </main>
  );
}
