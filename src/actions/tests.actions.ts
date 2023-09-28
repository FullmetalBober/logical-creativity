'use server';

import { prisma } from '@/db';
import { TTestSchema, testSchema } from '@/schemas/test';
import { getErrorMessage } from '@/utils/error';
import { getUpsertTestData } from '@/utils/testDataPrepare';

export async function upsertTest(data: TTestSchema) {
  try {
    const validatedData = testSchema.parse(data);

    const upsertData = getUpsertTestData(validatedData);

    await prisma.test.upsert(upsertData);
  } catch (error) {
    return { error: getErrorMessage(error) };
  }
}
