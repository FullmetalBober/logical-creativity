import NotebookSidebar from './NotebookSidebar';
import NotebookTextarea from './NotebookTextarea';
import { TNote } from '@/app/notes/notes';

type Props = { notes: TNote[] };

function NotebookBody(props: Props) {
  return (
    <section className='notebookBody'>
      <NotebookSidebar notes={props.notes}></NotebookSidebar>
      <NotebookTextarea />
    </section>
  );
}

export default NotebookBody;
