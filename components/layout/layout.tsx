import MainHeader from './main-header';
import styles from './layout.module.css';

import type { DefaultProps } from '@/utils/types';

export default function Layout({ children }: DefaultProps) {
  return (
    <>
      <MainHeader />
      <main className={styles.main}>{children}</main>
    </>
  );
}
