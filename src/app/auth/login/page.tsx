import Authorization from '@/components/auth/Authorization';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <Authorization authorized={!!session} />
    </main>
  );
}
