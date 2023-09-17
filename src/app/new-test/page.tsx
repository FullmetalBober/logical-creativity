'use client';

import { TNewTestSchema, newTestSchema } from '@/schemas/newTest';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFieldArray } from 'react-hook-form';
import { Button, Input } from 'react-daisyui';
import QuestionsInputs from '@/components/test/QuestionsInputs';

const errorClassName = (error: boolean) => (error ? 'input-error' : '');

export default function NewTest() {
  const {
    getValues,
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<TNewTestSchema>({
    resolver: zodResolver(newTestSchema),
    mode: 'onTouched',
  });

  const submitHandler = async (data: TNewTestSchema) => {
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
