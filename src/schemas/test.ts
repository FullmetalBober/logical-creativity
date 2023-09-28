import { z } from 'zod';

const answerSchema = z.object({
  id: z.number().optional(),
  text: z.string().min(1).max(255),
  isCorrect: z.boolean().default(false),
});

export const isCorrectCheck = (data: TAnswerSchema[]) => data.filter((answer) => answer.isCorrect).length === 1;

const questionSchema = z.object({
  id: z.number().optional(),
  text: z.string().min(1).max(255),
  answers: z.array(answerSchema).min(2).refine(isCorrectCheck, 'There must be exactly one correct answer'),
});

export const testSchema = z.object({
  id: z.number().optional(),
  title: z.string().min(1).max(255),
  questions: z.array(questionSchema).nonempty(),
});

export type TAnswerSchema = z.infer<typeof answerSchema>;
export type TQuestionSchema = z.infer<typeof questionSchema>;
export type TTestSchema = z.infer<typeof testSchema>;
