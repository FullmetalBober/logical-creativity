import prisma from '@/lib/db';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, password } = body;
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: await bcrypt.hash(password, 10),
    },
  });
  return new Response(JSON.stringify(user));
}
