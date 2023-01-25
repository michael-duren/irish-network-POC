// import type { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';

export default function UserProfile() {
  const { data: session } = useSession({ required: true });

  return (
    <div>
      <h1>Welcome {session?.user?.name}</h1>
      <p>Contact</p>
      <p>{session?.user?.email}</p>
    </div>
  );
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/',
//       },
//     };
//   }

//   return {
//     props: {
//       session,
//     },
//   };
// };
