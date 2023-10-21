'use client';
import { Button } from '@nextui-org/button';
import { useState } from 'react';
import Board from '@/components/cardGame/Board';

export default function Home() {
  const [gameRunning, setGameRunning] = useState(false);

  function handleSetGameRunning() {
    setGameRunning(prevState => !prevState);
  }

  return (
    <main className='flex flex-col items-center justify-center'>
      <p>
        {!gameRunning && 'Зіграти в гру "Знайти пару"?'}
        {gameRunning && 'Гра почалась, успіхів!'}
      </p>
      <Button className='m-4' onClick={handleSetGameRunning}>{gameRunning ? 'Завершити поточну гру' : 'Почати нову гру'}</Button>
      {gameRunning && <Board />} 
    </main>
  );
}
