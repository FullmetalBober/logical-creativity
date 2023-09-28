import { TNote } from '@/app/notes/notes';
type Props = { notes: TNote[] };
function NotebookTextarea(props: Props) {
  return (
    <div className='notebookTextarea'>
      <p id='test'></p>
    </div>
  );
}

export default NotebookTextarea;
