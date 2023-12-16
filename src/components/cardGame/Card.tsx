import React from 'react';
import { CardType } from '@/app/card-game/cards';
import { StyledCard } from './StyledCard';
import { useAppDispatch, useAppSelector } from '@/store';
import { openCard } from '@/store/board-slice';

export function Card({ card }: { card: CardType }) {
  const { color, isFound } = card;
  const dispatch = useAppDispatch();
  const { firstOpened, secondOpened } = useAppSelector((state) => state.board);

  function handleClick() {
    dispatch(openCard(card));
  }

  function checkIfOpened() {
    return firstOpened?.id === card.id || secondOpened?.id === card.id || card.isFound
  }

  return (
    <StyledCard
      $bgColor={checkIfOpened() ? color : undefined}
      onClick={handleClick}
    >
      {!checkIfOpened() && <div className='text-6xl'>?</div>}
      {checkIfOpened() && <div className='text-2xl'>{isFound ? color + ' ✓' : color}</div>}
    </StyledCard>
  );
}
