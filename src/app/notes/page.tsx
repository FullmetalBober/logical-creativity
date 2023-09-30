import NotebookBody from "../../components/notebook/NotebookBody";
import {notes} from "@/app/notes/notes";
import {currentNoteId} from "@/app/notes/notes";

function Notebook() {

    return (
        <div>
            <NotebookBody notes={notes}></NotebookBody>
        </div>
    );
}

export default Notebook;
