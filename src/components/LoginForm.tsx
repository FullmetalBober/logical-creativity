'use client';

import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '@nextui-org/input';

interface ILoginFormInput {
  email: string;
  password: string;
}

export default function LoginForm() {
  const { register, handleSubmit } = useForm<ILoginFormInput>();

  const onSubmit: SubmitHandler<ILoginFormInput> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type={'email'}
        label={'Email'}
        {...register('email', {
          required: true,
          maxLength: 30,
          pattern: /^\S+@\S+$/i,
        })}
      />
      <Input
        type={'password'}
        label={'Password'}
        {...register('password', {
          required: true,
          maxLength: 30,
          minLength: 6,
        })}
      />
    </form>
  );
}
