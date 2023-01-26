import { signIn, signOut } from 'next-auth/react';

import NavItem from './nav-item';
import Button from '../../ui/button';
import styles from './nav-links.module.css';

type NavLinksProps = {
  currentSelectedRoute: string;
  status: 'authenticated' | 'loading' | 'unauthenticated';
};

export default function NavLinks({
  currentSelectedRoute,
  status,
}: NavLinksProps) {
  return (
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
            <Button onClickHandler={signOut} function="click" buttonType="dark">
              Sign Out
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
}
