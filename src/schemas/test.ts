import { z } from 'zod';

const answerSchema = z.object({
  text: z.string().min(1).max(255),
  isCorrect: z.boolean().default(false),
});
type TAnswerSchema = z.infer<typeof answerSchema>;
export const isCorrectCheck = (data: TAnswerSchema[]) => data.filter((answer) => answer.isCorrect).length === 1;

export const testSchema = z.object({
  title: z.string().min(1).max(255),
  questions: z
    .array(
      z.object({
        text: z.string().min(1).max(255),
        answers: z.array(answerSchema).min(2).refine(isCorrectCheck, 'There must be exactly one correct answer'),
      }),
    )
    .nonempty(),
});

export type TTestSchema = z.infer<typeof testSchema>;
