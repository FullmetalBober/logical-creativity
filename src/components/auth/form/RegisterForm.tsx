'use client';

import React from 'react';
import { SubmitHandler, useForm, UseFormProps } from 'react-hook-form';
import { Input } from '@nextui-org/input';
import { signUpSchema, TSignUpSchema } from '@/schemas/signup';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@nextui-org/button';
import { Divider, Spacer } from '@nextui-org/react';
import SPALink from '@/components/ui/SPALink';
import { TRegisterUser } from '@/app/auth/register/actions';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { MdDriveFileRenameOutline, MdPassword } from 'react-icons/md';
import { CiMail } from 'react-icons/ci';
import { endIconInputClasses, pageLinks } from '@/constants';

type Props = {
  submitAction: TRegisterUser;
  formParams?: UseFormProps<TSignUpSchema>;
};

export default function RegisterForm({ submitAction, formParams }: Props) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
    mode: 'onTouched',
    progressive: true,
    ...formParams,
  });

  const submitHandler: SubmitHandler<TSignUpSchema> = async (data) => {
    const result = await submitAction(data);
    if ('error' in result) return toast.error(result.error);

    const response = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: '/',
    });

    if (response && response.error) return toast.error(response.error);

    toast.success('User created successfully!');
    router.push('/');
  };

  const isButtonDisabled = !isValid || isSubmitting;

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className={'p-4'}>
        <Input
          type={'text'}
          label={'Full name'}
          variant={'bordered'}
          isInvalid={!!errors.fullName}
          {...register('fullName', {
            required: true,
            minLength: 8,
          })}
          endContent={<MdDriveFileRenameOutline className={endIconInputClasses} />}
        />
        <Spacer y={4} />
        <Input
          type={'email'}
          label={'Email'}
          variant={'bordered'}
          isInvalid={!!errors.email}
          {...register('email', {
            required: true,
            maxLength: 30,
            pattern: /^\S+@\S+$/i,
          })}
          endContent={<CiMail className={endIconInputClasses} />}
        />
        <Spacer y={4} />
        <Input
          type={'password'}
          label={'Password'}
          variant={'bordered'}
          isInvalid={!!errors.password}
          {...register('password', {
            required: true,
            maxLength: 30,
            minLength: 6,
          })}
          endContent={<MdPassword className={endIconInputClasses} />}
        />
        <Spacer y={4} />
        <Input
          type={'password'}
          label={'Confirm password'}
          variant={'bordered'}
          isInvalid={!!errors.confirmPassword}
          {...register('confirmPassword', {
            required: true,
            maxLength: 30,
            minLength: 6,
          })}
          endContent={<MdPassword className={endIconInputClasses} />}
        />
      </div>
      <Divider />
      <div className={'flex flex-col items-center p-4'}>
        <Button
          type={'submit'}
          color={'primary'}
          size={'lg'}
          isDisabled={isButtonDisabled}
          isLoading={isSubmitting}
          className={'w-full'}
        >
          Sign up
        </Button>
        <Spacer y={4} />
        <Divider />
        <Spacer y={4} />
        <SPALink href={pageLinks.login} className={'self-end'}>
          Already have an account?&nbsp;<span className={'underline'}>Login</span>
        </SPALink>
      </div>
    </form>
  );
}
