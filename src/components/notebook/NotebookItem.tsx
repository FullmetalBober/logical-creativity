'use client';

import { useNoteContext } from '@/context/note-context';
import { TNote } from '@/app/notes/notes';

type Props = { note: TNote };

function NotebookItem({ note }: Props) {
  const { setNote } = useNoteContext();

  const setNoteHandler = () => setNote(note);
  return (
    <button className='notebookItem' onClick={setNoteHandler}>
      {note.title}
    </button>
  );
}

export default NotebookItem;
