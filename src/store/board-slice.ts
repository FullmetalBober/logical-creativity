import { CardType, cardColors, shuffle } from "@/app/card-game/cards";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from ".";

type initialStateType = {
  gameRunning: boolean,
  firstOpened: CardType | null,
  secondOpened: CardType | null,
  foundCount: number,
  cards: CardType[],
}

const initialState: initialStateType = {
  gameRunning: false,
  firstOpened: null,
  secondOpened: null,
  foundCount: 0,
  cards: shuffle(
    [...cardColors, ...cardColors].map((item, index) => ({
      id: index,
      color: item,
      isFound: false,
    })),
  )
}

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    startGame(state) {
      state.cards = shuffle(
        [...cardColors, ...cardColors].map((item, index) => ({
          id: index,
          color: item,
          isFound: false,
        })));
      state.foundCount = 0;
      state.gameRunning = true;
    },
    stopGame(state, action: PayloadAction<boolean>) {
      if (state.foundCount === 6 || action.payload) {
        state.gameRunning = false;
      }
    },
    openCard(state, action: PayloadAction<CardType>) {
      if (!state.firstOpened) {
        state.firstOpened = action.payload;
      }
      else if (state.firstOpened && !state.secondOpened && action.payload.id != state.firstOpened.id) {
        state.secondOpened = action.payload;
      }
    },
    pairFoundAction(state) {
      state.cards = state.cards.map((el) =>
        el.id === state.firstOpened?.id || el.id === state.secondOpened?.id ? { ...el, isFound: true } : el
      );
      state.foundCount += 1;
      state.firstOpened = null;
      state.secondOpened = null;
    },
    notPairAction(state) {
      if (state.firstOpened && state.secondOpened) {
        state.firstOpened = null;
        state.secondOpened = null;
      }
    },
  }
});

export const { startGame, stopGame, openCard, pairFoundAction, notPairAction } = boardSlice.actions;
export default boardSlice.reducer;

export const checkCards = () => async (dispatch: AppDispatch, getState: () => RootState) => {
  const { board } = getState();

  try {
    if (board.firstOpened && board.secondOpened && board.firstOpened.color === board.secondOpened.color) {
      setTimeout(() => {
        dispatch(pairFoundAction());
      }, 0)
    } else {
      setTimeout(() => {
        dispatch(notPairAction());
      }, 800);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};