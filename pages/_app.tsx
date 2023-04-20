import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../src/components/Layout';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  const domain = 'https://www.todaywelift.com';

  return (
    <Layout>
      <Head>
        <meta property="og:title" content="Today We Lift" />
        <meta property="og:description" content="Get summer body ready with this great web app that delivers intense weight lifting workouts directly to you! Free to use and mobile friendly this is the perfect tool to streamline your gym activities." />
        <meta name="image" property="og:image" content={`${domain}/weights.jpeg`} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

