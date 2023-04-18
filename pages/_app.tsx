import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../src/components/Layout'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta property="og:title" content="The best free workouts you can find" />
        <meta property="og:image" content="https://drive.google.com/file/d/1mzEtwc0zrmmf7IKLkHgapw4wvEMnNcDm/view?usp=sharing" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>

  )
}
