import { useState, useEffect } from 'react';
import { CardType, cardColors, shuffle } from '@/app/card-game/cards';
import { CardThing } from '@/components/cardGame/Card';

type boardProps = {
  endGame: () => void;
};

export default function Board({endGame}: boardProps) {
  const [openedCard, setOpenedCard] = useState<CardType>();
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

  useEffect(()=> {
    const isUnfound = allCards.some(el => el.isFound == false);
    if(!isUnfound) endGame();
  }, [allCards])

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
