import Head from 'next/head';

import Banner from '@/components/ui/banner';

export default function Home() {
  return (
    <>
      <Head>
        <title>Irish Network MN</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner
        titleColor="white"
        imagePath="/images/stools.jpg"
        title="Welcome"
      />
    </>
  );
}
