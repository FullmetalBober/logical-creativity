import NotebookBody from '../../components/notebook/NotebookBody';
import { notes } from '@/app/notes/notes';

export default function Notebook() {
  return (
    <main>
      <NotebookBody notes={notes}></NotebookBody>
    </main>
  );
}
