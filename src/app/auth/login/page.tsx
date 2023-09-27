'use client';

import React from 'react';
import LoginForm from '@/components/LoginForm';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Spacer } from '@nextui-org/react';

export default function LoginPage() {
  return (
    <div className={'flex items-center justify-center'}>
      <Card className={'max-w-[800px]'}>
        <CardHeader className={'p-5 pb-0'}>
          <div>
            <h3>Login Form</h3>
            <Spacer y={4} />
            <p className={'text-small'}>Lets start out creative trip!</p>
          </div>
        </CardHeader>
        <CardBody>
          <LoginForm />
        </CardBody>
      </Card>
    </div>
  );
}
