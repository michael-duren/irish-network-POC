import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import type { Session } from 'next-auth';

import { Poppins } from '@next/font/google';
import '@/styles/globals.css';

import Layout from '@/components/layout/layout';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '400'],
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <main className={poppins.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </SessionProvider>
  );
}
