'use server';

import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/db';
import { TTestSchema, testSchema } from '@/schemas/test';
import { getErrorMessage } from '@/utils/error';
import { getUpsertTestData } from '@/utils/testDataPrepare';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';

export async function getTest(id: string | number) {
  try {
    const validatedId = testSchema.shape.id.parse(+id);

    const test = await prisma.test.findUnique({
      where: { id: validatedId },
      include: {
        questions: {
          include: {
            answers: true,
          },
        },
      },
    });

    if (!test) return { error: 'Test not found' };

    return { test };
  } catch (error) {
    return { error: getErrorMessage(error) };
  }
}

export async function upsertTest(data: TTestSchema) {
  try {
    data = testSchema.parse(data);

    const session = await getServerSession(authOptions);
    if (!session) return { error: 'User not found' };
    const userId = session.user.id;

    const upsertData = getUpsertTestData(data, userId);

    await prisma.test.upsert(upsertData);
  } catch (error) {
    return { error: getErrorMessage(error) };
  }
}
