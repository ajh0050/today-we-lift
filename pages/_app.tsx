import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../src/components/Layout'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta property="og:title" content="Today We Lift" />
        <meta property="og:description" content="The best free workouts you can find" />
        <meta name="image" property="og:image" content="https://drive.google.com/file/d/1EiDjejF8Rkpnakv6_G9osAFQ1KP4WZb-/view?usp=sharing" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>

  )
}
