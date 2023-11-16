'use client';

import { createContext, useState, useContext } from 'react';
import { TNoteSchema } from '@/schemas/note';

type Props = {
  children: React.ReactNode;
};

type TNoteContext = {
  note?: TNoteSchema;
  setNote: React.Dispatch<React.SetStateAction<TNoteSchema | undefined>>;
};

export const NoteContext = createContext<TNoteContext | null>(null);

export const NoteContextProvider = ({ children }: Props) => {
  const [note, setNote] = useState<TNoteSchema>();

  return <NoteContext.Provider value={{ note, setNote }}>{children}</NoteContext.Provider>;
};

export const useNoteContext = () => {
  const context = useContext(NoteContext);

  if (!context) throw new Error('useNoteContext must be used within a NoteContextProvider');

  return context;
};
