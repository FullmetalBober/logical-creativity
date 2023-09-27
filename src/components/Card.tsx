import { CardType } from '@/app/card-game/cards';
import { Card } from '@nextui-org/react';

type cardProps = CardType & {
  onOpenCard: (item: CardType) => void;
};

export function CardThing({ onOpenCard, id, color, isOpened, isFound }: cardProps) {
  function handleTurnCard() {
    console.log('click');
    onOpenCard({ id, color, isOpened, isFound });
  }

  return !isOpened ? (
    <Card className={`w-24 h-24 items-center content-center bg-default-500`} isPressable onPress={handleTurnCard}>
      <p>?</p>
    </Card>
  ) : (
    <Card className={`w-24 h-24 flex items-center content-center ${isFound ? `bg-${color}-200` : `bg-${color}-800`}`}>
      <p>SAAAAAA</p>
    </Card>
  );
}
