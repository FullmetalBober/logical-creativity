'use client';

import { Control, Controller, FieldErrors, FieldPath, UseFormRegister, useFieldArray, useWatch } from 'react-hook-form';
import { TTestSchema, isCorrectCheck } from '@/schemas/test';
import { Input } from '@nextui-org/input';
import { Checkbox, CheckboxProps } from '@nextui-org/checkbox';
import { Button } from '@nextui-org/button';

type Props = {
  control: Control<TTestSchema>;
  register: UseFormRegister<TTestSchema>;
  errors: FieldErrors<TTestSchema>;
  questionIndex: number;
};

export default function AnswersInputs({ control, register, errors, questionIndex }: Props) {
  const formPath: FieldPath<TTestSchema> = `questions.${questionIndex}.answers`;

  const answers = useWatch({
    control,
    name: formPath,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: formPath,
  });

  const onAppendHandler = () => {
    append({
      text: '',
      isCorrect: false,
    });
  };

  const checkboxProps: CheckboxProps = !isCorrectCheck(answers)
    ? {
        color: 'danger',
        isInvalid: true,
      }
    : { color: 'success' };
  return (
    <div className='flex flex-col gap-2'>
      {fields.map(({ id }, index) => (
        <div key={id} className='flex items-center gap-1'>
          <Controller
            control={control}
            name={`${formPath}.${index}.isCorrect`}
            render={({ field: { onChange } }) => <Checkbox {...checkboxProps} size='lg' onChange={onChange} />}
          />
          <Input
            {...register(`${formPath}.${index}.text`)}
            label={`Answer ${index + 1}`}
            variant='bordered'
            isInvalid={!!errors.questions?.[questionIndex]?.answers?.[index]?.text}
          />
          <Button type='button' color='warning' size='lg' variant='bordered' onClick={() => remove(index)}>
            Remove
          </Button>
        </div>
      ))}
      <Button type='button' size='lg' onClick={onAppendHandler}>
        Add answer
      </Button>
    </div>
  );
}
