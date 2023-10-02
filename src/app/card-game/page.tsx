'use client';
import { Button } from '@nextui-org/button';
import { useState } from 'react';
import Board from '@/components/cardGame/Board';

export default function Home() {
  const [gameRunning, setGameRunning] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);

  function handleSetGameRunning() {
    setGameEnd(false);
    setGameRunning((prevState) => !prevState);
  }

  function handleEndOfGame() {
    setGameEnd((prevState) => !prevState);
    setGameRunning((prevState) => !prevState)
  }

  return (
    <main className='flex flex-col items-center justify-center'>
      {gameEnd && <p>Перемога! Ви можете випробувати себе ще стільки разів, скільки забажаєте.</p>}
      <p>
        {!gameRunning && 'Зіграти в гру "Знайти пару"?'}
        {gameRunning && 'Гра почалась, успіхів!'}
      </p>
      <Button className='m-4' onClick={handleSetGameRunning}>{!gameRunning ? 'Так' : 'Стоп'}</Button>
      {gameRunning && <Board endGame={handleEndOfGame}/>}
    </main>
  );
}
