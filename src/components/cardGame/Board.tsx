import { useState, useEffect } from 'react';
import { CardType, cardColors, shuffle } from '@/app/card-game/cards';
import { Card } from '@/components/cardGame/Card';

export default function Board() {
  const [firstOpened, setFirstOpened] = useState<CardType>();
  const [secondOpened, setSecondOpened] = useState<CardType>();
  const [foundCount, setFoundCount] = useState(0);
  const [cards, setCards] = useState(
    shuffle(
      [...cardColors, ...cardColors].map((item, index) => ({
        id: index,
        color: item,
        isFound: false,
      })),
    ),
  );

  const closeCards = () => {
    setFirstOpened(undefined);
    setSecondOpened(undefined);
  }

  function handleOpeningCard(item: CardType) {
    if(!firstOpened) setFirstOpened(item);
    else if(firstOpened && !secondOpened && item.id != firstOpened.id) setSecondOpened(item);
  }

  if(firstOpened && secondOpened){
    if(firstOpened.color === secondOpened.color){
      setCards((prevState) => prevState.map((el) =>
        el.id === firstOpened.id || el.id === secondOpened.id ? {...el, isFound: true} : el  
      ));        
      setFoundCount(prevState => prevState += 1);

      closeCards();
    } 
    else
      setTimeout(() => {closeCards()}, 1000);
  }

  const setIsOpened = (card: CardType) => {
    return card.id === firstOpened?.id || card.id === secondOpened?.id || card.isFound
    ? true : false 
  }
  
  return (
    <>
      <div className='grid grid-cols-4 grid-rows-3 gap-4 py-4'>
        {cards.map((card) => (
          <Card 
            handleOpening={handleOpeningCard} 
            key={card.id} 
            isOpened={setIsOpened(card)}
            {...card} 
          />
        ))}
      </div>
      {foundCount === 6 && <p>Вітаємо з проходженням!</p>}
    </>
  );
}
