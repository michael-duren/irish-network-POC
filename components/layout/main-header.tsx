import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Poppins } from '@next/font/google';
import classNames from 'classnames';

import Button from '../ui/button';
import styles from './main-header.module.css';

const unbound = Poppins({
  subsets: ['latin'],
  weight: ['200', '400'],
});

export default function MainHeader() {
  const router = useRouter();
  const currentRoute = router.pathname;

  const isActiveClass = (path: string, route: string) => {
    const isActive = route === path ? styles.active : styles.inActive;

    const navClassName = classNames(styles.link, isActive);
    console.log(navClassName);
    return navClassName;
  };

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
            <Link className={isActiveClass('/', currentRoute)} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className={isActiveClass('/about', currentRoute)}
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={isActiveClass('/members', currentRoute)}
              href="/members"
            >
              Membership
            </Link>
          </li>
          <li>
            <Link
              className={isActiveClass('/events', currentRoute)}
              href="/events"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              className={isActiveClass('/contact', currentRoute)}
              href="/contact"
            >
              Contact
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
