'use client';

import { useRouter } from 'next/navigation';
import { TTestSchema, testSchema } from '@/schemas/test';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormProps } from 'react-hook-form';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import toast from 'react-hot-toast';
import { upsertTest } from '@/actions/tests.actions';
import QuestionsInputs from './QuestionsInputs';

type Props = {
  formParams?: UseFormProps<TTestSchema>;
};

export default function FormTest({ formParams }: Props) {
  const router = useRouter();
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
    const result = await upsertTest(data);
    if (result?.error) return toast.error(result.error);
    toast.success('Test created successfully!');
    router.push('/');
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
