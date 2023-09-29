'use server';

import { prisma } from '@/db';
import { TTestSchema, testSchema } from '@/schemas/test';
import { getErrorMessage } from '@/utils/error';
import { getUpsertTestData } from '@/utils/testDataPrepare';

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
    const validatedData = testSchema.parse(data);

    const upsertData = getUpsertTestData(validatedData);

    await prisma.test.upsert(upsertData);
  } catch (error) {
    return { error: getErrorMessage(error) };
  }
}
