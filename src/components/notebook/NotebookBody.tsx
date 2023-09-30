import NotebookSidebar from './NotebookSidebar';
import NotebookTextarea from './NotebookTextarea';
import { TNote } from '@/app/notes/notes';
import NotebookItem from './NotebookItem';
type Props = { notes: TNote[] };


function NotebookBody(props: Props) {
  return (
    <div className='notebookBody'>
      <NotebookSidebar notes={props.notes}></NotebookSidebar>
        <NotebookTextarea  notes={props.notes}></NotebookTextarea>
    </div>
  );
}

export default NotebookBody;
