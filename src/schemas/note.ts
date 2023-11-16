import { z } from 'zod';

export const noteSchema = z.object({
  title: z.string(),
  body: z.string(),
});

export type TNoteSchema = z.infer<typeof noteSchema> & { id: number };
