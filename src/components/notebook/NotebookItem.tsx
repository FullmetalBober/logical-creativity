import { TNote } from '@/app/notes/notes';

type Props = { note: TNote };
function NotebookItem(props: Props) {
  return (
    <button className='notebookItem'>
      <h4>{props.note.title}</h4>
    </button>
  );
}

export default NotebookItem;
