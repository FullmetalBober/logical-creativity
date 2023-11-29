import React from 'react';
import { CardType } from '@/app/card-game/cards';
import { StyledCard } from './StyledCard';

type cardProps = CardType & {
  handleOpening: (item: CardType) => void;
  isOpened: boolean;
};

export const Card: React.FC<cardProps> = (props: cardProps) => {
  const { color, isFound, handleOpening, isOpened } = props;

  function handleClick() {
    handleOpening(props);
  }

  return (
    <StyledCard
      $bgColor={isOpened ? color : undefined}
      onClick={handleClick}
    >
      {!isOpened && <div className='text-6xl'>?</div>}
      {isOpened && <div className='text-2xl'>{isFound ? color + ' ✓' : color}</div>}
    </StyledCard>
  );
}
