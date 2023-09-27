import { useState } from 'react';
import { CardType, cardColors, shuffle } from '@/app/card-game/cards';
import { CardThing } from '@/components/cardGame/Card';

export default function Board() {
  const [allCards, setAllCards] = useState(
    shuffle(
      [...cardColors, ...cardColors].map((item, index) => ({
        id: index,
        color: item,
        isOpened: false,
        isFound: false,
      })),
    ),
  );
  const [openedCard, setOpenedCard] = useState<CardType>();

  function handleOpenedCard(item: CardType) {
    setAllCards((prevState) => prevState.map((el) => (el.id === item.id ? { ...el, isOpened: true } : el)));

    if (!openedCard) setOpenedCard(item);
    else {
      if (openedCard.color === item.color)
        setAllCards((prevState) =>
          prevState.map((el) => (el.id === openedCard.id || el.id === item.id ? { ...el, isFound: true } : el)),
        );
      else
        setTimeout(() => {
          setAllCards((prevState) =>
            prevState.map((el) => (el.id === openedCard.id || el.id === item.id ? { ...el, isOpened: false } : el)),
          );
        }, 1000);

      setOpenedCard(undefined);
    }
  }

  return (
    <div className='grid grid-cols-4 grid-rows-4 gap-4 py-4'>
      {allCards.map((card) => (
        <CardThing onOpenCard={handleOpenedCard} key={card.id} {...card} />
      ))}
    </div>
  );
}
