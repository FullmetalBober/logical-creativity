export type CardType = {
  id: number;
  color: string;
  isFound: boolean;
};

export const cardColors = [
  'red',
  'blue',
  'yellow',
  'purple',
  'green',
  'pink',
];

export function shuffle(arr: Array<CardType>) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr;
}
