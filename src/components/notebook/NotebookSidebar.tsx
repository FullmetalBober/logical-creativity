'use client';

import { Listbox, ListboxItem } from '@nextui-org/listbox';
import NotebookItem from './NotebookItem';
import { ListboxWrapper } from './ListboxWrapper';
import { useNoteContext } from '@/context/note-context';

export default function NotebookSidebar() {
  const { notes, createNoteObj } = useNoteContext();
  notes.sort((a, b) => (a.isFavorite && !b.isFavorite ? -1 : !a.isFavorite && b.isFavorite ? 1 : 0));

  return (
    <ListboxWrapper>
      <NotebookItem note={createNoteObj} />

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
