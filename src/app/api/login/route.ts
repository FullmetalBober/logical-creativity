import bcrypt from 'bcrypt';
import prisma from '@/lib/db';

interface RequestBody {
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();
  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });

  const isPasswordValid = user && (await bcrypt.compare(body.password, user.password));

  if (isPasswordValid) {
    const { password, ...userWithNoPassword } = user;
    return new Response(JSON.stringify(userWithNoPassword));
  } else {
    return new Response(JSON.stringify(null));
  }
}
