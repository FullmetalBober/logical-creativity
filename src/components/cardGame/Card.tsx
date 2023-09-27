import { Card } from '@nextui-org/card';
import { CardType } from '@/app/card-game/cards';

type cardProps = CardType & {
  onOpenCard: (item: CardType) => void;
};

export function CardThing(props: cardProps) {
  const { color, isOpened, isFound, onOpenCard } = props;

  function handleTurnCard() {
    if (isOpened) return;
    console.log('click');
    onOpenCard(props);
  }

  let cardColor = 'bg-default-500';
  if (isOpened) cardColor = color
  if (isFound) cardColor = 'bg-success-500';
  return (
    <Card
      className={`h-24 w-24 content-center items-center bg-default-500 ${cardColor}`}
      isPressable
      onPress={handleTurnCard}
    >
      {!isOpened && <div className='text-6xl'>?</div>}
      {isOpened && <div className='text-2xl'>{color}</div>}
      {isFound && <div className='text-6xl'>✅</div>}
    </Card>
  );
}
