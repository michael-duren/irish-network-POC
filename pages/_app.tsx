import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import type { Session } from 'next-auth';

import { Inter } from '@next/font/google';
import '@/styles/globals.css';

import Layout from '@/components/layout/layout';

const roboto = Inter({
  // weight: ['400', '700'],
  subsets: ['latin'],
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <main className={roboto.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </SessionProvider>
  );
}
