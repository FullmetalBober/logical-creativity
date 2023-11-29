'use client';

import { Listbox, ListboxItem } from '@nextui-org/listbox';
import { Spinner } from '@nextui-org/spinner';
import NotebookItem from './NotebookItem';
import { ListboxWrapper } from './ListboxWrapper';
import { useAppSelector } from '@/store';
import { createNoteObj } from '@/constants';

export default function NotebookSidebar() {
  const { notes: data, loading } = useAppSelector((state) => state.notebook);
  const notes = [...data].sort((a, b) => (a.isFavorite && !b.isFavorite ? -1 : !a.isFavorite && b.isFavorite ? 1 : 0));

  return (
    <ListboxWrapper>
      <NotebookItem note={createNoteObj} />
      {loading && <Spinner />}
      <Listbox aria-label='Notebook List'>
        {notes.map((note) => (
          <ListboxItem key={note.id} textValue={note.title}>
            <NotebookItem note={note} />
          </ListboxItem>
        ))}
      </Listbox>
    </ListboxWrapper>
  );
}
