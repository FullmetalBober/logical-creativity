'use client';

import React from 'react';
import { SubmitHandler, useForm, UseFormProps } from 'react-hook-form';
import { Input } from '@nextui-org/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@nextui-org/button';
import { Divider, Spacer } from '@nextui-org/react';
import SPALink from '@/components/ui/SPALink';
import { signInSchema, TSignInSchema } from '@/schemas/signin';
import toast from 'react-hot-toast';
import GoogleButton from '@/components/auth/buttons/GoogleButton';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { MdPassword } from 'react-icons/md';
import { CiMail } from 'react-icons/ci';
import { endIconInputClasses, pageLinks } from '@/constants';

type Props = {
  formParams?: UseFormProps<TSignInSchema>;
};

export default function LoginForm({ formParams }: Props) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<TSignInSchema>({
    resolver: zodResolver(signInSchema),
    mode: 'onTouched',
    progressive: true,
    ...formParams,
  });

  const submitHandler: SubmitHandler<TSignInSchema> = async (data) => {
    const response = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: '/',
    });

    if (response && response.error) return toast.error(response.error);
    router.push('/');
  };

  const isButtonDisabled = !isValid || isSubmitting;

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className={'p-4'}>
        <Input
          type={'email'}
          label={'Email'}
          variant={'bordered'}
          isInvalid={!!errors.email}
          {...register('email', {
            required: true,
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
          Login with credentials
        </Button>
        <Spacer y={2} />
        <p className={'text-center text-xl'}>OR</p>
        <Spacer y={2} />
        <GoogleButton />
        <Spacer y={4} />
        <Divider />
        <Spacer y={4} />
        <SPALink href={pageLinks.register} className={'self-end'}>
          Don&apos;t have an account?&nbsp;<span className={'underline'}>Register</span>
        </SPALink>
      </div>
    </form>
  );
}
