import { registerUser } from '@/app/auth/register/actions';
import Registration from '@/components/auth/Registration';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';

export default async function RegisterPage() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <Registration registerUser={registerUser} authorized={!!session} />
    </main>
  );
}
