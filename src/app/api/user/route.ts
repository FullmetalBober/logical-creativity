import prisma from '@/lib/db';
import bcrypt from 'bcrypt';

interface RequestBody {
  name: string;
  email: string;
  password: string;
  image: string;
}

export async function POST(request: Request) {
  console.log('register route');
  const body: RequestBody = await request.json();
  const { name, email, password, image } = body;
  const user = await prisma.user.create({
    data: {
      name,
      email,
      image,
      password: await bcrypt.hash(password, 10),
    },
  });
  const { password: _, ...userWithNoPassword } = user;
  return new Response(JSON.stringify(userWithNoPassword));
}
