'use client'

import NotebookItem from './NotebookItem';
import { TNote } from '@/app/notes/notes';
import {Listbox, ListboxItem} from "@nextui-org/listbox";
import {ListboxWrapper} from "./ListboxWrapper";

type Props = { notes: TNote[] };

export default function NotebookSidebar(props: Props) {
  return (
    <>
      <ListboxWrapper>
        <Listbox>
          {props.notes.map((note) => (
              <ListboxItem key={note.id}><NotebookItem key={note.id} note={note} ></NotebookItem></ListboxItem>
          ))}
        </Listbox>
      </ListboxWrapper>
      <div>

    </div>
    </>

  );
}