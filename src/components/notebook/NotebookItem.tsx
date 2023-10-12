'use client';

import { useNoteContext } from '@/context/note-context';
import { TNote } from '@/app/notes/notes';
import {Button} from "@nextui-org/button";

type Props = { note: TNote };

function NotebookItem({ note }: Props) {
  const { setNote } = useNoteContext();

  const setNoteHandler = () => setNote(note);
  return (
    <Button radius="sm" className='notebookItem' onClick={setNoteHandler}>
      {note.title}
    </Button>
  );
}

export default NotebookItem;
