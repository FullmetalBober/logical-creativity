'use client';

import { Card, CardHeader, CardBody } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { useNoteContext } from '@/context/note-context';
import NotebookCreate from './NotebookCreate';

function NotebookTextarea() {
  const { note, createNoteObj } = useNoteContext();

  return (
    <Card className='flex-1'>
      <CardHeader className='flex gap-3'>
        <div className='flex flex-col'>
          <p className='text-md'>{note?.title}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{note?.body}</p>
        {note?.id === createNoteObj.id && <NotebookCreate />}
      </CardBody>
    </Card>
  );
}

export default NotebookTextarea;
