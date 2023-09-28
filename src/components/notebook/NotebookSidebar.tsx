import NotebookItem from './NotebookItem';
import { TNote } from '@/app/notes/notes';
type Props = { notes: TNote[] };
function NotebookSidebar(props: Props) {
  return (
    <div className='notebookSidebar'>
      <NotebookItem note={props.notes[0]}></NotebookItem>
      <NotebookItem note={props.notes[1]}></NotebookItem>
      <NotebookItem note={props.notes[2]}></NotebookItem>
    </div>
  );
}

export default NotebookSidebar;
