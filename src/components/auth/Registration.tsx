'use client';

import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Divider, Spacer } from '@nextui-org/react';
import { lazy } from 'react';
import { TRegisterUser } from '@/app/auth/register/actions';
import { IoWarningOutline } from 'react-icons/io5';
import AuthorizedModal from '@/components/auth/AuthorizedModal';

const RegisterForm = lazy(() => import('@/components/auth/form/RegisterForm'));

type Props = {
  registerUser: TRegisterUser;
  authorized: boolean;
};

export default function Registration({ registerUser, authorized }: Props) {
  const ModalHeaderElement = (
    <div className={'flex items-center'}>
      <IoWarningOutline className={'mr-2 text-2xl'} />
      <h3>Registration warning</h3>
    </div>
  );
  const ModalBodyElement = (
    <>
      <p>You are already authenticated. No need to be on this page.</p>
      <p>Go back and continue develop your logic skills :&gt;</p>
    </>
  );

  if (authorized)
    return <AuthorizedModal ModalHeaderElement={ModalHeaderElement} ModalBodyElement={ModalBodyElement} />;

  return (
    <div className={'flex items-center justify-center'}>
      <Card className={'w-[500px] max-w-[1200px]'}>
        <CardHeader className={'p-0'}>
          <div className={'p-4'}>
            <h3 className={'text-xl'}>Register Form</h3>
            <Spacer y={4} />
            <p className={'text-small'}>Lets start our creative trip!</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className={'p-0'}>
          <RegisterForm submitAction={registerUser} />
        </CardBody>
      </Card>
    </div>
  );
}
