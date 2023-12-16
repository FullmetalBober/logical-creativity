import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { TNoteSchema } from '@/schemas/note';

type QuestionState = {
  loading: boolean;
  notes: TNoteSchema[];
  note: TNoteSchema | null;
};

const initialState: QuestionState = {
  loading: true,
  notes: [],
  note: null,
};

const notebookSlice = createSlice({
  name: 'notebook',
  initialState,
  reducers: {
    initNotebook(state, action: PayloadAction<TNoteSchema[]>) {
      state.notes = action.payload;
      state.loading = false;
    },
    selectNote(state, action: PayloadAction<TNoteSchema>) {
      state.note = action.payload;
    },
    addNote(state, action: PayloadAction<TNoteSchema>) {
      action.payload.id = uuidv4();
      state.notes.push(action.payload);
    },
  },
});

export const notebookActions = notebookSlice.actions;
export default notebookSlice.reducer;
