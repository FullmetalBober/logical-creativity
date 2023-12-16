'use client';

import { createContext, useState, useContext, useEffect } from 'react';
import useFetch from '@/hooks/useFetch';
import { TNoteSchema } from '@/schemas/note';

type Props = {
  children: React.ReactNode;
};

type TNoteContext = {
  notes: TNoteSchema[];
  setNotes: React.Dispatch<React.SetStateAction<TNoteSchema[]>>;
  note?: TNoteSchema;
  setNote: React.Dispatch<React.SetStateAction<TNoteSchema | undefined>>;
  pushNote: (note: TNoteSchema) => void;
  isLoading: boolean;
};

export const NoteContext = createContext<TNoteContext | null>(null);

export const NoteContextProvider = ({ children }: Props) => {
  const { response, isLoading } = useFetch<{ posts: TNoteSchema[] }>('https://dummyjson.com/posts?limit=5');
  const [notes, setNotes] = useState<TNoteSchema[]>([]);
  const [note, setNote] = useState<TNoteSchema>();

  const pushNote = (note: TNoteSchema) => {
    console.log(note);
    setNotes((prev) => [...prev, note]);
    setNote(note);
  };

  useEffect(() => {
    if (response) {
      const { posts: notes } = response;
      setNotes(notes);
    }
  }, [response]);

  return (
    <NoteContext.Provider value={{ notes, setNotes, note, setNote, pushNote, isLoading }}>
      {children}
    </NoteContext.Provider>
  );
};

export const useNoteContext = () => {
  const context = useContext(NoteContext);

  if (!context) throw new Error('useNoteContext must be used within a NoteContextProvider');

  return context;
};
