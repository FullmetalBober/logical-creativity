'use client';

import { useNoteContext } from '@/context/note-context';

function NotebookTextarea() {
  const { note } = useNoteContext();
  return (
    <div>
      <p>
        {!note && 'No note selected'}
        {note && note.text}
      </p>
    </div>
  );
}

export default NotebookTextarea;
