import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Poppins } from '@next/font/google';
import classNames from 'classnames';

import NavItem from './nav-item';
import Button from '../ui/button';
import styles from './main-header.module.css';

const unbound = Poppins({
  subsets: ['latin'],
  weight: ['200', '400'],
});

export default function MainHeader() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const currentSelectedRoute = router.pathname;

  return (
    <header className={classNames(styles.header, unbound.className)}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/in-logo.svg"
            alt="Irish Network Logo"
            width="150"
            height="150"
          />
        </Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <NavItem link="/" currentRoute={currentSelectedRoute} name={'Home'} />
          <NavItem
            link="/about"
            currentRoute={currentSelectedRoute}
            name={'About'}
          />
          <NavItem
            link="/members"
            currentRoute={currentSelectedRoute}
            name={'Members'}
          />
          <NavItem
            link="/events"
            currentRoute={currentSelectedRoute}
            name={'Events'}
          />
          <NavItem
            link="/contact"
            currentRoute={currentSelectedRoute}
            name={'Contact'}
          />

          {status === 'authenticated' && (
            <NavItem
              link="/profile"
              currentRoute={currentSelectedRoute}
              name="Profile"
            />
          )}
          {(status === 'loading' || status === 'unauthenticated') && (
            <li>
              <Button
                onClickHandler={signIn}
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
                onClickHandler={signOut}
                function="click"
                buttonType="dark"
              >
                Sign Out
              </Button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
