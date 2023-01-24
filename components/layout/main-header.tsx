import Link from 'next/link';

import styles from './main-header.module.css';

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Logo</Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/members">Membership</Link>
            <Link href="/events">Events</Link>
            <Link href="/auth/login">Log In</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
