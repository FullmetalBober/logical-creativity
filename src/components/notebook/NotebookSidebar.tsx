'use client';

import { Listbox, ListboxItem } from '@nextui-org/listbox';
import { Spinner } from '@nextui-org/spinner';
import { TNoteSchema } from '@/schemas/note';
import NotebookItem from './NotebookItem';
import { ListboxWrapper } from './ListboxWrapper';
import useFetch from '../../hooks/useFetch';

export default function NotebookSidebar() {
  const { response, isLoading } = useFetch<{ posts: TNoteSchema[] }>('https://dummyjson.com/posts?limit=5');
  const { posts: notes } = response || { posts: [] };

  return (
    <ListboxWrapper>
      {isLoading && <Spinner />}
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
