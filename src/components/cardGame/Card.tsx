import { CardType } from '@/app/card-game/cards';
import './card.css';

type cardProps = CardType & {
  handleOpening: (item: CardType) => void;
  isOpened: boolean;
};

export function Card(props: cardProps) {
  const { color, isFound, handleOpening, isOpened } = props;

  function handleClick() {
    handleOpening(props);
  }

  return (
    <div
      className={
        `card h-24 w-24 content-center items-center 
        ${isOpened ? color : 'bg-default-200'}`
      }
      onClick={handleClick}
    >
      {!isOpened && <div className='text-6xl'>?</div>}
      {isOpened && <div className='text-2xl'>{isFound ? color + " ✓" : color}</div>}
    </div>
  );
}
