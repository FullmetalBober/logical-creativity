import { useEffect } from 'react';
import { Card } from '@/components/cardGame/Card';
import { useAppDispatch, useAppSelector } from '@/store';
import { checkCards } from '@/store/board-slice';

export default function Board() {
  const { cards, secondOpened } = useAppSelector((state) => state.board);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkCards());
  }, [secondOpened])

  return (
    <>
      <div className='grid grid-cols-4 grid-rows-3 gap-4 py-4'>
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
          />
        ))}
      </div>
    </>
  );
}
