import { signIn, signOut, useSession } from 'next-auth/react';

import Button from './button';

export default function AuthButton() {
  const { status } = useSession();

  const signInHandler = () => {
    signIn('google', { callbackUrl: 'http://localhost:3000/profile' });
  };

  const signOutHandler = () => {
    signOut({ callbackUrl: 'http://localhost:3000/' });
  };

  return (
    <>
      {(status === 'loading' || status === 'unauthenticated') && (
        <li>
          <Button
            onClickHandler={signInHandler}
            function="click"
            buttonType="primary"
          >
            Log In
          </Button>
        </li>
      )}
      {status === 'authenticated' && (
        <li>
          <Button
            onClickHandler={signOutHandler}
            function="click"
            buttonType="primary"
          >
            Sign Out
          </Button>
        </li>
      )}
    </>
  );
}
