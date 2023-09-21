'use client';

import { TTestSchema, testSchema } from '@/schemas/test';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, UseFormProps, useForm } from 'react-hook-form';
import { Button, Input } from 'react-daisyui';
import QuestionsInputs from './QuestionsInputs';
import { errorClassChecker } from '@/utils/errorChecker';

type Props = {
  submitAction: SubmitHandler<TTestSchema>;
  formParams?: UseFormProps<TTestSchema>;
};

export default function FormTest({ formParams, submitAction }: Props) {
  const errorClassName = errorClassChecker();
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

  const submitHandler = async (data: TTestSchema) => submitAction(data);

  return (
    <main className="hero">
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
