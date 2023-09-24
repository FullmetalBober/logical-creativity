'use client';

import { TTestSchema, testSchema } from '@/schemas/test';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, UseFormProps, useForm } from 'react-hook-form';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import QuestionsInputs from './QuestionsInputs';

type Props = {
  submitAction: SubmitHandler<TTestSchema>;
  formParams?: UseFormProps<TTestSchema>;
};

export default function FormTest({ formParams, submitAction }: Props) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<TTestSchema>({
    resolver: zodResolver(testSchema),
    mode: 'onTouched',
    ...formParams,
  });

  // const submitHandler = async (data: TTestSchema) => submitAction(data);
  const submitHandler = async (data: TTestSchema) => console.log(data);

  return (
    <main className='max-w-3xl'>
      <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col justify-center gap-4'>
        <Input {...register('title')} label='Title' variant='bordered' isInvalid={!!errors.title} />
        <QuestionsInputs control={control} register={register} errors={errors} />
        <Button color='primary' size='lg' isDisabled={!isValid}>
          Submit
        </Button>
      </form>
    </main>
  );
}
