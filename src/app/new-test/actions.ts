'use server';

import { prisma } from '@/db';
import { TTestSchema, testSchema, TQuestionSchema, TAnswerSchema } from '@/schemas/test';

export async function createTest(data: TTestSchema) {
  testSchema.parse(data);
  const testData = {
    data: {
      ...data,
      questions: createQuestions(data.questions),
    },
  };

  await prisma.test.create(testData);
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
