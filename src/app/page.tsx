'use client'; //! Required for use 'react-daisyui'

import { Button } from 'react-daisyui';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <main>
      <Button>Button</Button>
      <h2>Client Session</h2>
      <pre>{JSON.stringify(session)}</pre>
      {session && status === 'authenticated' && <p>Signed in as {session.user?.email}</p>}
    </main>
  );
}
