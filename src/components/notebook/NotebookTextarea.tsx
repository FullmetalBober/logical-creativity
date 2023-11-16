'use client';

import { Card, CardHeader, CardBody } from '@nextui-org/card';
import { useNoteContext } from '@/context/note-context';
import { Divider } from '@nextui-org/divider';

function NotebookTextarea() {
  const { note } = useNoteContext();
  return (
    <Card>
      <CardHeader className='flex gap-3'>
        <div className='flex flex-col'>
          <p className='text-md'>{note?.title}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{note?.body}</p>
      </CardBody>
    </Card>
  );
}

export default NotebookTextarea;
