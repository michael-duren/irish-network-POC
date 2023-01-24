import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from '@next/font/google';

import Layout from '@/components/layout/layout';

const roboto = Inter({
  // weight: ['400', '700'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
