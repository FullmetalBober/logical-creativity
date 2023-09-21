'use server';

import { TTestSchema, testSchema } from '@/schemas/test';

export async function createTest(data: TTestSchema) {
  testSchema.parse(data);
}
