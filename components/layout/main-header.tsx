import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from '@next/font/google';
import classNames from 'classnames';

import Button from '../ui/button';
import styles from './main-header.module.css';

const unbound = Poppins({
  subsets: ['latin'],
  weight: ['200', '400'],
});

export default function MainHeader() {
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
          <li>
            <Link className={styles.link} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/members">
              Membership
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/events">
              Events
            </Link>
          </li>
          <li>
            <Button linkTo="/auth/login" buttonType="primary">
              Log In
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
