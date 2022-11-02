import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Fabian Books!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Fabian Book!" />
        <p className="description">
          Mavelikkara <code> Kerala </code>
        </p>
        <h1>We will be UP Soon!</h1>
      </main>

      <Footer />
    </div>
  )
}
