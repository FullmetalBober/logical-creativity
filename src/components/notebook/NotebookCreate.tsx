'use client';

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@nextui-org/button';
import { Input, Textarea } from '@nextui-org/input';
import { Autocomplete, AutocompleteItem } from '@nextui-org/autocomplete';
import { Checkbox } from '@nextui-org/checkbox';
import { useAppDispatch } from '@/store';
import { notebookActions } from '@/store/notebook-slice';
import { noteSchema, TNoteSchema } from '@/schemas/note';
import { colors } from '@/constants';

function NotebookCreate() {
  const dispatch = useAppDispatch();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<TNoteSchema>({
    resolver: zodResolver(noteSchema),
    mode: 'onTouched',
  });

  const submitHandler = (data: TNoteSchema) => {
    dispatch(notebookActions.addNote(data));
    reset();
  };

  const disabledButton = !isValid || isSubmitting;
  return (
    <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col space-y-2'>
      <Input {...register('title')} label='Title' variant='underlined' isInvalid={!!errors.title} />
      <Textarea {...register('body')} label='Body' variant='underlined' isInvalid={!!errors.body} />
      <Autocomplete
        {...register('color', {
          setValueAs: (value) => (value === '' ? undefined : value),
        })}
        label='Pick a color'
      >
        {colors.map((color) => (
          <AutocompleteItem key={color} value={color}>
            {color}
          </AutocompleteItem>
        ))}
      </Autocomplete>
      <Controller
        control={control}
        name='isFavorite'
        render={({ field: { onChange } }) => (
          <Checkbox size='lg' onChange={onChange}>
            Make favorite?
          </Checkbox>
        )}
      />
      <Button type='submit' variant='bordered' size='lg' isDisabled={disabledButton} isLoading={isSubmitting}>
        Submit
      </Button>
    </form>
  );
}

export default NotebookCreate;
