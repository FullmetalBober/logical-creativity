'use client';

import { TTestSchema, testSchema } from '@/schemas/test';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button, Input } from 'react-daisyui';
import QuestionsInputs from '@/components/test/QuestionsInputs';

const errorClassName = (error: boolean) => (error ? 'input-error' : '');

export default function NewTest() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<TTestSchema>({
    resolver: zodResolver(testSchema),
    mode: 'onTouched',
  });

  const submitHandler = async (data: TTestSchema) => {
    console.log(data);
  };

  return (
    <main>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <Input {...register('title')} className={errorClassName(!!errors.title)} />
        </div>
        <QuestionsInputs control={control} register={register} errors={errors} />
        <Button color="primary" wide={true} disabled={!isValid} className="mt-1">
          Submit
        </Button>
      </form>
    </main>
  );
}
