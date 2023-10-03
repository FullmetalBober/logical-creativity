'use server';

import { signUpSchema, TSignUpSchema } from '@/schemas/signup';
import prisma from '@/lib/db';
import { getErrorMessage } from '@/utils/error';
import bcrypt from 'bcrypt';

export async function registerUser(data: TSignUpSchema) {
  try {
    data = signUpSchema.parse(data);

    const existingUser = await prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (existingUser) return { error: getErrorMessage('User already exists') };

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await prisma.user.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        password: hashedPassword,
      },
    });

    console.log(user);

    const { password, ...userWithNoPassword } = user;

    return userWithNoPassword;
  } catch (error) {
    return { error: getErrorMessage(error) };
  }
}

export type TRegisterUser = typeof registerUser;
