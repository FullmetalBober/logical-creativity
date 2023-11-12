import { z } from 'zod';

export const feedbackSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
  age: z.number().gt(16),
  mes: z.string().min(5).max(1000),
});

export type TFeedbackSchema = z.infer<typeof feedbackSchema>;