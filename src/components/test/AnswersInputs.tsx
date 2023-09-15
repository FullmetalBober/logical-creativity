import { Control, FieldErrors, UseFormRegister, useFieldArray } from 'react-hook-form';
import { TNewTestSchema } from '@/schemas/newTest';
import { Button, Input, Join } from 'react-daisyui';

const errorClassName = (error: boolean) => `join-item ${error ? 'input-error' : ''}`;

type Props = {
  control: Control<TNewTestSchema>;
  register: UseFormRegister<TNewTestSchema>;
  errors: FieldErrors<TNewTestSchema>;
  questionIndex: number;
};

export default function AnswersInputs({ control, register, errors, questionIndex }: Props) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `questions.${questionIndex}.answers`,
  });

  const onAppendHandler = () => {
    console.log(questionIndex);
    append({
      text: '',
      isCorrect: false,
    });
    console.log(fields);
  };

  return (
    <div>
      {fields.map(({ id }, index) => (
        <div key={id} className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Answer {index + 1}</span>
          </label>
          <Join>
            <Input
              {...register(`questions.${questionIndex}.answers.${index}.text`)}
              className={errorClassName(!!errors.questions?.[index]?.text)}
            />
            <Button type="button" onClick={() => remove(index)} className="join-item">
              Remove
            </Button>
          </Join>
        </div>
      ))}
      <Button type="button" onClick={onAppendHandler}>
        Add answer
      </Button>
    </div>
  );
}
