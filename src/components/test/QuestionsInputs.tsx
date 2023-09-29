import { Control, FieldErrors, FieldPath, UseFormRegister, useFieldArray } from 'react-hook-form';
import { TTestSchema } from '@/schemas/test';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import AnswersInputs from './AnswersInputs';

type Props = {
  control: Control<TTestSchema>;
  register: UseFormRegister<TTestSchema>;
  errors: FieldErrors<TTestSchema>;
};

export default function QuestionsInputs({ control, register, errors }: Props) {
  const formPath: FieldPath<TTestSchema> = 'questions';
  const errorPath = errors.questions;

  const { fields, append, remove } = useFieldArray({
    control,
    name: formPath,
  });

  const onAppendHandler = () => {
    append({
      text: '',
      answers: [],
    });
  };

  return (
    <div className='flex flex-col gap-3'>
      {fields.map(({ id }, index) => (
        <div key={id} className='flex flex-col gap-2'>
          <div className='flex items-center gap-1'>
            <Input
              {...register(`${formPath}.${index}.text`)}
              label={`Question ${index + 1}`}
              variant='bordered'
              isInvalid={!!errorPath?.[index]?.text}
            />
            <Button type='button' color='danger' size='lg' variant='bordered' onClick={() => remove(index)}>
              Remove
            </Button>
          </div>
          <AnswersInputs control={control} register={register} errors={errors} questionIndex={index} />
        </div>
      ))}
      <Button type='button' color='secondary' size='lg' onClick={onAppendHandler}>
        Add question
      </Button>
    </div>
  );
}
