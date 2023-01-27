import Head from 'next/head';

import styles from './home.module.css';
import Banner from '@/components/ui/banner';
import IntroCard from '@/components/layout/intro-card';

export default function Home() {
  return (
    <>
      <Head>
        <title>Irish Network MN</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.section}>
        <Banner
          titleColor="white"
          imagePath="/images/stools.jpg"
          title="Welcome"
        />
        <IntroCard />
      </section>
    </>
  );
}
