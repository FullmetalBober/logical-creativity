import { TTestSchema, TQuestionSchema, TAnswerSchema } from '@/schemas/test';

export const getUpsertTestData = (data: TTestSchema, userId: number) => ({
  where: {
    id: data.id || -1,
  },
  create: {
    ...data,
    questions: getCreateQuestionsData(data.questions),
    userId: userId,
  },
  update: {
    ...data,
    questions: getUpsertQuestionsData(data.questions),
  },
});

const getCreateQuestionsData = (questions: TQuestionSchema[]) => ({
  create: questions.map((question) => ({
    ...question,
    answers: getCreateAnswersData(question.answers),
  })),
});

const getUpsertQuestionsData = (questions: TQuestionSchema[]) => ({
  upsert: questions.map((question) => ({
    where: {
      id: question.id || -1,
    },
    create: {
      ...question,
      answers: getCreateAnswersData(question.answers),
    },
    update: {
      ...question,
      answers: getUpsertAnswersData(question.answers),
    },
  })),
});

const getCreateAnswersData = (answers: TAnswerSchema[]) => ({
  create: answers,
});

const getUpsertAnswersData = (answers: TAnswerSchema[]) => ({
  upsert: answers.map((answer) => ({
    where: {
      id: answer.id || -1,
    },
    create: answer,
    update: answer,
  })),
});
