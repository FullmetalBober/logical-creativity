import { CardType } from '@/app/card-game/cards';
import './card.css';

type cardProps = CardType & {
  onOpenCard: (item: CardType) => void;
};

export function CardThing(props: cardProps) {
  const { color, isOpened, isFound, onOpenCard } = props;

  function handleTurnCard() {
    if (isOpened) return;
    onOpenCard(props);
  }

  let cardColor = 'bg-default-200';
  if (isOpened) cardColor = color;
  if (isFound) cardColor = 'bg-default-500';
  return (
    <div
      className={`card h-24 w-24 content-center items-center ${cardColor}`}
      onClick={handleTurnCard}
    >
      {!isOpened && <div className='text-6xl'>?</div>}
      {isOpened && <div className='text-2xl'>{color}</div>}
    </div>
  );
}
