import { Control, FieldErrors, FieldPath, UseFormRegister, useFieldArray, useWatch } from 'react-hook-form';
import { TTestSchema, isCorrectCheck } from '@/schemas/test';
import { Button, Checkbox, Input, Join } from 'react-daisyui';
import { errorClassChecker } from '@/utils/errorChecker';

type Props = {
  control: Control<TTestSchema>;
  register: UseFormRegister<TTestSchema>;
  errors: FieldErrors<TTestSchema>;
  questionIndex: number;
};

export default function AnswersInputs({ control, register, errors, questionIndex }: Props) {
  const errorClassName = errorClassChecker('join-item');
  const formPath: FieldPath<TTestSchema> = `questions.${questionIndex}.answers`;

  const answers = useWatch({
    control,
    name: formPath,
  });
  const isCorrectError = !isCorrectCheck(answers);

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
              {...register(`${formPath}.${index}.isCorrect`)}
              className={errorClassName(isCorrectError)}
            />
            <Input
              {...register(`${formPath}.${index}.text`)}
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
