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
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/members">Membership</Link>
          </li>

          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/auth/login">Log In</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
