import Image from 'next/image'
import Head from 'next/head'
import Navbar from '../components/navbar'
import Beranda from '../components/beranda'
import Tentang from '../components/tentang'
import Fitur from '../components/fitur'
import Kontak from '../components/kontak'
import Footer from '../components/footer'
import { isAndroid, isIOS } from "react-device-detect";

export default function Home() {
  return (
    <main className='text-slate-600 scroll-smooth mx-auto'>
      <div className='mx-auto space-y-20 lg:space-y-0'>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>AG Force</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Navbar isAndroid={isAndroid} isIOS={isIOS} />
        <section id='beranda'>
          <Beranda />
        </section>
        <section id='tentang'>
          <Tentang />
        </section>
        <section id='fitur'>
          <Fitur />
        </section>
        <section id='kontak'>
          <Kontak />
        </section>
        <Footer isAndroid={isAndroid} isIOS={isIOS} />
      </div>
    </main>
  )
}
