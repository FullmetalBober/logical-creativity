'use client';

import { Button } from '@nextui-org/button';
import { useAppDispatch } from '@/store';
import { notebookActions } from '@/store/notebook-slice';
import { TNoteSchema } from '@/schemas/note';

type Props = { note: TNoteSchema };

function NotebookItem({ note }: Props) {
  const dispatch = useAppDispatch();

  const setNoteHandler = () => dispatch(notebookActions.selectNote(note));
  return (
    <Button radius='sm' className='notebookItem' onClick={setNoteHandler} fullWidth={true} color={note.color}>
      {note.title}
    </Button>
  );
}

export default NotebookItem;
