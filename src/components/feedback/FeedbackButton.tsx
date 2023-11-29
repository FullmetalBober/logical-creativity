'use client';
import { useState } from 'react';
import { Button } from '@nextui-org/react';
import ModalPortal from '@/components/feedback/ModalPortal';

export default function FeedbackButton(){
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='fixed bottom-5 right-3'>
      <Button onClick={() => setShowModal(true)} disableRipple>Leave Feedback</Button>
      <ModalPortal opened={showModal} onClose={() => setShowModal(false)}/>
    </div>
  );
}