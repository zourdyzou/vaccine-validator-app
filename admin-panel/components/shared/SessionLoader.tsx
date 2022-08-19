import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import * as React from 'react';

const SessionLoader = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const session = useSession();

  React.useEffect(() => {
    session.status !== 'authenticated'
      ? router.push('/login')
      : router.push('/');
  }, [router, session.status]);

  return <>{children}</>;
};

export default SessionLoader;
