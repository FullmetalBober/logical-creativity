'use client';

import { useNoteContext } from '@/context/note-context';
import NotebookSidebar from './NotebookSidebar';
import NotebookTextarea from './NotebookTextarea';

function NotebookBody() {
  const { note } = useNoteContext();
  return (
    <section className='notebookBody flex gap-2'>
      <NotebookSidebar />
      {note && <NotebookTextarea />}
    </section>
  );
}

export default NotebookBody;
