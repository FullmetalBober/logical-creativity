import NotebookItem from './NotebookItem';
import { TNote } from '@/app/notes/notes';

type Props = { notes: TNote[] };

function NotebookSidebar(props: Props) {
  return (
    <div>
      {props.notes.map((note) => (
        <NotebookItem key={note.id} note={note}></NotebookItem>
      ))}
    </div>
  );
}

export default NotebookSidebar;
