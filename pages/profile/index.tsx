import { useState } from 'react';
import Image from 'next/image';
// import type { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';
import classNames from 'classnames';

import styles from '../../styles/profile.module.css';

import MembershipCard from '@/components/layout/user-profile/membership-card';

type NavStatus = 'membership' | 'perks';

export default function UserProfile() {
  const [isActiveMember, setIsActiveMember] = useState(false);
  const [navStatus, setNavStatus] = useState<NavStatus>('membership');
  const { data: session } = useSession({ required: true });

  // if (!session) {
  //   return <p>Loading...</p>;
  // }

  const isActiveClass = (nav: NavStatus) => {
    const isActive = nav === navStatus ? styles.active : styles.inActive;

    const navClassName = classNames(styles.nav, isActive);

    return navClassName;
  };

  const memberClass = isActiveClass('membership');
  console.log(memberClass);
  const perksClass = isActiveClass('perks');

  return (
    <section className={styles.section}>
      <aside className={styles.sidebar}>
        <Image
          src={session?.user?.image!}
          width={100}
          height={100}
          alt={`profile icon for ${session?.user?.name}`}
          className={styles.image}
        />
        <h2 className={styles.name}>{session?.user?.name}</h2>
        <ul className={styles.sideitem}>
          <li className={styles.email}>{session?.user?.email}</li>
          <li
            onClick={() => setNavStatus('membership')}
            className={memberClass}
          >
            Membership
          </li>
          <li onClick={() => setNavStatus('perks')} className={perksClass}>
            Perks
          </li>
        </ul>
      </aside>
      <div className={styles.main}>
        {navStatus === 'membership' ? (
          <MembershipCard isMembershipActive={isActiveMember} />
        ) : (
          <p>PERKS</p>
        )}
      </div>
    </section>
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
