import { Control, FieldErrors, UseFormRegister, useFieldArray } from 'react-hook-form';
import { TNewTestSchema } from '@/schemas/newTest';
import { Button, Checkbox, Input, Join } from 'react-daisyui';

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
    append({
      text: '',
      isCorrect: false,
    });
  };
  console.log(errors);
  return (
    <div>
      {fields.map(({ id }, index) => (
        <div key={id} className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Answer {index + 1}</span>
          </label>
          <Join className="items-center">
            <Checkbox
              size="lg"
              {...register(`questions.${questionIndex}.answers.${index}.isCorrect`)}
              className={errorClassName(!!errors.questions?.[questionIndex]?.answers?.[index]?.isCorrect)}
            />
            <Input
              {...register(`questions.${questionIndex}.answers.${index}.text`)}
              className={errorClassName(!!errors.questions?.[questionIndex]?.answers?.[index]?.text)}
            />
            <Button type="button" onClick={() => remove(index)} color="error" className="join-item">
              Remove
            </Button>
          </Join>
        </div>
      ))}
      <Button type="button" color="accent" wide={true} onClick={onAppendHandler} className="mt-1">
        Add answer
      </Button>
    </div>
  );
}
