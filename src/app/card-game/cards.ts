import { semanticColors } from '@nextui-org/theme';

export type CardType = {
  id: number;
  color: string;
  isOpened: boolean;
  isFound: boolean;
};

export const cardColors = [
  'bg-primary',
  'bg-secondary-300',
  'bg-success',
  'bg-error',
  'bg-warning',
  'bg-default',
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
