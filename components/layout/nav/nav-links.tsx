import { useState } from 'react';

import classNames from 'classnames';

import { GoThreeBars } from 'react-icons/go';
import { IoMdClose } from 'react-icons/io';

import NavItem from './nav-item';
import AuthButton from '@/components/ui/auth-button';
import styles from './nav-links.module.css';

type NavLinksProps = {
  currentSelectedRoute: string;
  status: 'authenticated' | 'loading' | 'unauthenticated';
};

export default function NavLinks({
  currentSelectedRoute,
  status,
}: NavLinksProps) {
  const [showMobile, setShowMobile] = useState(false);
  const onClickHandler = () => {
    setShowMobile(!showMobile);
    console.log(showMobile);
  };

  const activeStyle = showMobile ? styles.active : styles.inActive;
  const navStyles = classNames(styles.navigation, activeStyle);

  return (
    <nav className={navStyles}>
      <div className={styles.mobile} onClick={onClickHandler}>
        {showMobile ? (
          <IoMdClose className={styles.mobileButton} />
        ) : (
          <GoThreeBars className={styles.mobileButton} />
        )}
      </div>

      <ul onClick={onClickHandler}>
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
        <AuthButton />
      </ul>
    </nav>
  );
}
