import { User } from '@nextui-org/user';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import FeedbackButton from '@/components/feedback/FeedbackButton';
import Main from "@/components/layout/Main";


export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="mainContainer">
      {session && session.user && session.user.image != null && (
        <User
          name={session.user.name}
          description={session.user.email}
          avatarProps={{
            src: session.user.image,
          }}
        />
      )}
        <Main />
      <FeedbackButton />
    </main>
  );
}

