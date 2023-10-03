'use server';

import { TTestSchema, testSchema, TQuestionSchema, TAnswerSchema } from '@/schemas/test';
import { getErrorMessage } from '@/utils/error';
import prisma from '@/lib/db';

export async function createTest(data: TTestSchema) {
  try {
    data = testSchema.parse(data);

    const prismaTestData = {
      data: {
        ...data,
        questions: createQuestions(data.questions),
      },
    };

    const test = await prisma.test.create(prismaTestData);
    console.log(test);
  } catch (error) {
    return { error: getErrorMessage(error) };
  }
}

const createQuestions = (questions: TQuestionSchema[]) => ({
  create: questions.map((question) => ({
    ...question,
    answers: createAnswers(question.answers),
  })),
});

const createAnswers = (answers: TAnswerSchema[]) => ({
  create: answers.map((answer) => ({
    ...answer,
    isCorrect: answer.isCorrect,
  })),
});

export type TCreateTest = typeof createTest;
