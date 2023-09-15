import { z } from 'zod';

export const newTestSchema = z.object({
  title: z.string().min(1).max(255),
  questions: z.array(
    z.object({
      text: z.string().min(1).max(255),
      answers: z
        .array(
          z.object({
            text: z.string().min(1).max(255),
            isCorrect: z.boolean(),
          }),
        )
        .refine((data) => data.some((answer) => answer.isCorrect), {
          message: 'At least one answer must be correct',
          path: ['answers'],
        }),
    }),
  ),
});

export type TNewTestSchema = z.infer<typeof newTestSchema>;
