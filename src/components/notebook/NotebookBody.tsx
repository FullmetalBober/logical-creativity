'use client';

import { useEffect } from 'react';
import NotebookSidebar from './NotebookSidebar';
import NotebookTextarea from './NotebookTextarea';
import { TNoteSchema } from '@/schemas/note';
import useFetch from '@/hooks/useFetch';
import { useAppDispatch, useAppSelector } from '@/store';
import { notebookActions } from '@/store/notebook-slice';

function NotebookBody() {
  const { response } = useFetch<{ posts: TNoteSchema[] }>('https://dummyjson.com/posts?limit=5');
  const { notes, note } = useAppSelector((state) => state.notebook);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (notes.length > 0) return;
    if (response) {
      const { posts: notes } = response;
      dispatch(notebookActions.initNotebook(notes));
    }
  }, [response]);

  return (
    <section className='notebookBody flex gap-2'>
      <NotebookSidebar />
      {note && <NotebookTextarea />}
    </section>
  );
}

export default NotebookBody;
