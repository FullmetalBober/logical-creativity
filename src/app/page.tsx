import { User } from '@nextui-org/user';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import FeedbackButton from '@/components/feedback/FeedbackButton';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      {session && session.user && session.user.image != null && (
        <User
          name={session.user.name}
          description={session.user.email}
          avatarProps={{
            src: session.user.image,
          }}
        />
      )}
      <FeedbackButton />
    </main>
  );
}
