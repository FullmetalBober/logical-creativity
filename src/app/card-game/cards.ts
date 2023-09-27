export type CardType = {
  id: number;
  color: string;
  isOpened: boolean;
  isFound: boolean;
};

const data = [
  {
    id: 0,
    color: 'success',
  },
  {
    id: 0,
    color: 'secondary',
  },
  {
    id: 0,
    color: 'primary',
  },
  {
    id: 0,
    color: 'danger',
  },
  {
    id: 0,
    color: 'warning',
  },
  {
    id: 0,
    color: 'default',
  },
];

export function getCardsArr() {
  return data;
}

export function shuffle(arr: Array<CardType>) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr;
}
