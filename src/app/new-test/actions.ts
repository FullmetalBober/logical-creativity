'use server';

import { getServerSession } from 'next-auth';
import { TTestSchema, testSchema, TQuestionSchema, TAnswerSchema } from '@/schemas/test';
import { getErrorMessage } from '@/utils/error';
import prisma from '@/lib/db';
import { authOptions } from '../api/auth/[...nextauth]/authOptions';

export async function createTest(data: TTestSchema) {
  try {
    const session = await getServerSession(authOptions);
    data = testSchema.parse(data);

    const prismaTestData = {
      data: {
        ...data,
        questions: createQuestions(data.questions),
        User: {
          connect: {
            id: session?.user.id,
          },
        },
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
