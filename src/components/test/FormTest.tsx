'use client';

import { TTestSchema, testSchema } from '@/schemas/test';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormProps } from 'react-hook-form';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import QuestionsInputs from './QuestionsInputs';
import toast from 'react-hot-toast';
import { TCreateTest } from '@/app/new-test/actions';

type Props = {
  submitAction: TCreateTest;
  formParams?: UseFormProps<TTestSchema>;
};

export default function FormTest({ formParams, submitAction }: Props) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm<TTestSchema>({
    resolver: zodResolver(testSchema),
    mode: 'onTouched',
    progressive: true,
    ...formParams,
  });

  const submitHandler = async (data: TTestSchema) => {
    const result = await submitAction(data);
    if (result?.error) return toast.error(result.error);
    toast.success('Test created successfully!');
  };

  const disabledButton = !isValid || isSubmitting;
  return (
    <main className='max-w-3xl'>
      <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col justify-center gap-4'>
        <Input {...register('title')} label='Title' variant='bordered' isInvalid={!!errors.title} />
        <QuestionsInputs control={control} register={register} errors={errors} />
        <Button type='submit' color='primary' size='lg' isDisabled={disabledButton} isLoading={isSubmitting}>
          Submit
        </Button>
      </form>
    </main>
  );
}
