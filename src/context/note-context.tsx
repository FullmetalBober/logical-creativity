'use client';

import { createContext, useState, useContext } from 'react';
import { TNote } from '../app/notes/notes';

type Props = {
  children: React.ReactNode;
};

type TNoteContext = {
  note?: TNote;
  setNote: React.Dispatch<React.SetStateAction<TNote | undefined>>;
};

export const NoteContext = createContext<TNoteContext | null>(null);

export const NoteContextProvider = ({ children }: Props) => {
  const [note, setNote] = useState<TNote>();

  return <NoteContext.Provider value={{ note, setNote }}>{children}</NoteContext.Provider>;
};

export const useNoteContext = () => {
  const context = useContext(NoteContext);

  if (!context) throw new Error('useNoteContext must be used within a NoteContextProvider');

  return context;
};
