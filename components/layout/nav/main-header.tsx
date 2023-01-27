import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import { Poppins } from '@next/font/google';
import classNames from 'classnames';

import NavLinks from './nav-links';

import styles from './main-header.module.css';

const unbound = Poppins({
  subsets: ['latin'],
  weight: ['200', '400'],
});

export default function MainHeader() {
  const router = useRouter();
  const currentRoute = router.pathname;
  const { status } = useSession();

  return (
    <header className={classNames(styles.header, unbound.className)}>
      <div className={styles.logo}>
        <Link className={styles.image} href="/">
          <Image
            src="/in-logo.svg"
            alt="Irish Network Logo"
            width="150"
            height="150"
          />
        </Link>
      </div>
      <NavLinks currentSelectedRoute={currentRoute} status={status} />
    </header>
  );
}
