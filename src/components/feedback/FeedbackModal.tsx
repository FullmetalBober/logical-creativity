import { Modal, ModalContent, ModalHeader, ModalBody, Input, ModalFooter, Button, Textarea } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { feedbackSchema, TFeedbackSchema } from '@/schemas/feedback';
import { zodResolver } from '@hookform/resolvers/zod';

type feedbackModalType = {
  onClose : () => void;
}

export default function FeedbackModal(props : feedbackModalType) {
  const { register, handleSubmit, formState: { errors } } = useForm<TFeedbackSchema>({resolver : zodResolver(feedbackSchema)});

  const submitForm = (data : TFeedbackSchema) => { 
    console.log('Data: '); 
    console.log(data);
    toast.success('Thanks for your feedback');
    props.onClose(); 
  }

  return (
  <Modal isOpen={true} onOpenChange={props.onClose} placement='top-center'>
    <ModalContent>
      {(onClose) => (
        <form onSubmit={handleSubmit(submitForm)}>
          <ModalHeader className='flex flex-col gap-1'>Your feedback</ModalHeader>
          <ModalBody>
            <Input
              {...register('email')}
              label='Email'
              placeholder='Enter your email here'
              type='email'
            />
            {errors.email && <p className='text-[13px] text-gray-500'>Enter valid email please</p>}
            <Input
              {...register('name')}
              label='Name'
              placeholder='Enter your full name here'
            />
            {errors.name && <p className='text-[13px] text-gray-500'>Enter valid name please</p>}
            <Input
              {...register('age', {
                setValueAs: (value) => Number(value),
              })}
              label='Age'
              placeholder='Enter your full age here'
              type='number'
            />
            {errors.age && <p className='text-[13px] text-gray-500'>Enter valid age please</p>}
            <Textarea
              {...register('mes')}
              label='Message'
              placeholder='Leave your message here'
            />
            {errors.mes && <p className='text-[13px] text-gray-500'>Enter valid message please</p>}
          </ModalBody>
          <ModalFooter>
            <Button color='danger' variant='flat' onPress={onClose}>
              Cancel
            </Button>
            <Button 
              color='primary'
              type='submit'
            >
              Send
            </Button>
          </ModalFooter>
        </form>
      )}
    </ModalContent>
  </Modal>
  );
}