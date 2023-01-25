import { useSession, signIn, signOut } from 'next-auth/react';

export default function Login() {
  const { data: session, status } = useSession();
  console.log(session);

  if (session) {
    return (
      <div>
        <p>Welcome, {session.user?.name}</p>
        <img
          src={session.user?.image!}
          alt={`image of ${session.user?.name}`}
        />
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>Existing members login</p>
        <button onClick={() => signIn()}>Sign In</button>
      </div>
    );
  }

  return (
    <>
      <h1>Existing Members Login Here:</h1>
    </>
  );
}
