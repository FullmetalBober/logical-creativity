'use client'
import {currentNoteId, TNote} from '@/app/notes/notes';

type Props = { note: TNote };

function NotebookItem(props: Props) {
    console.log(currentNoteId);
  return (
    <button className='notebookItem' onClick={() => {props.note.status= true} }>
      {props.note.title}
    </button>
  );
}


export default NotebookItem;
