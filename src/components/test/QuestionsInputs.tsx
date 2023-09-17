import { Control, FieldErrors, UseFormRegister, useFieldArray } from 'react-hook-form';
import { TTestSchema } from '@/schemas/test';
import { Button, Input, Join } from 'react-daisyui';
import AnswersInputs from './AnswersInputs';

const errorClassName = (error: boolean) => `join-item ${error ? 'input-error' : ''}`;

type Props = {
  control: Control<TTestSchema>;
  register: UseFormRegister<TTestSchema>;
  errors: FieldErrors<TTestSchema>;
};

export default function QuestionsInputs({ control, register, errors }: Props) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'questions',
  });

  const onAppendHandler = () => {
    append({
      text: '',
      answers: [],
    });
  };

  return (
    <section>
      {fields.map(({ id }, index) => (
        <div key={id}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Question {index + 1}</span>
            </label>
            <Join>
              <Input
                {...register(`questions.${index}.text`)}
                className={errorClassName(!!errors.questions?.[index]?.text)}
              />
              <Button type="button" onClick={() => remove(index)} color="error" className="join-item">
                Remove
              </Button>
            </Join>
          </div>
          <AnswersInputs control={control} register={register} errors={errors} questionIndex={index} />
        </div>
      ))}
      <Button type="button" color="secondary" wide={true} onClick={onAppendHandler} className="mt-1">
        Add question
      </Button>
    </section>
  );
}
