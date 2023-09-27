import { useState } from 'react';
import { CardType, getCardsArr, shuffle } from '@/app/card-game/cards';
import { CardThing } from '@/components/Card';

export function Board() {
  const [allCards, setAllCards] = useState(
    shuffle(
      [...getCardsArr(), ...getCardsArr()].map((item, index) => ({
        ...item,
        id: index,
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
    <div className='grid grid-rows-4 grid-cols-4 gap-4 py-4'>
      {allCards.map((card) => (
        <CardThing onOpenCard={handleOpenedCard} key={card.id} {...card} />
      ))}
    </div>
  );
}
