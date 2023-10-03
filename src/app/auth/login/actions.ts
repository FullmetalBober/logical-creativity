'use server';

import { signInSchema, TSignInSchema } from '@/schemas/signin';
import prisma from '@/lib/db';
import bcrypt from 'bcrypt';
import { getErrorMessage } from '@/utils/error';

export async function loginUser(data: TSignInSchema) {
  try {
    data = signInSchema.parse(data);

    const user = await prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });

    console.log(user);

    const isPasswordValid = user && (await bcrypt.compare(data.password, user.password));

    if (isPasswordValid) {
      return user;
    } else {
      return { error: getErrorMessage('Invalid email or password') };
    }
  } catch (error) {
    return { error: getErrorMessage(error) };
  }
}

export type TLoginUser = typeof loginUser;
