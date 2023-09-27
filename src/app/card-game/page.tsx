'use client';
import { Button } from '@nextui-org/button';
import { useState } from 'react';
import { Board } from '@/components/Board';

export default function Home() {
  const [gameRunning, setGameRunning] = useState(false);

  function handleSetGameRunning() {
    setGameRunning((prevState) => !prevState);
  }

  return (
    <main className='flex flex-col justify-center items-center'>
      <h1>
        {!gameRunning && 'Зіграти в гру "Знайти пару"'}
        {gameRunning && 'Гра почалась, успіхів!'}
      </h1>
      <Button onClick={handleSetGameRunning}>{!gameRunning ? 'Так' : 'Стоп'}</Button>
      {gameRunning && <Board />}
    </main>
  );
}
