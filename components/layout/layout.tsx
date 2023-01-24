import MainHeader from './main-header';

import type { DefaultProps } from '@/utils/types';

export default function Layout({ children }: DefaultProps) {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
}
