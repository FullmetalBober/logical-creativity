import { z } from 'zod';

export const newTestSchema = z.object({
  title: z.string().min(1).max(255),
  questions: z
    .array(
      z.object({
        text: z.string().min(1).max(255),
        answers: z
          .array(
            z.object({
              text: z.string().min(1).max(255),
              isCorrect: z.boolean().default(false),
            }),
          )
          .min(2)
          .refine(
            (data) => data.filter((answer) => answer.isCorrect).length === 1,
            'There must be exactly one correct answer',
          ),
      }),
    )
    .nonempty(),
});

export type TNewTestSchema = z.infer<typeof newTestSchema>;
