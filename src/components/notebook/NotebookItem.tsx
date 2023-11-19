'use client';

import { Button } from '@nextui-org/button';
import { useNoteContext } from '@/context/note-context';
import { TNoteSchema } from '@/schemas/note';

type Props = { note: TNoteSchema };

function NotebookItem({ note }: Props) {
  const { setNote } = useNoteContext();

  const setNoteHandler = () => setNote(note);
  return (
    <Button radius='sm' className='notebookItem' onClick={setNoteHandler} fullWidth={true} color={note.color}>
      {note.title}
    </Button>
  );
}

export default NotebookItem;
