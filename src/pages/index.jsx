import Image from 'next/image'
import Navbar from '../components/navbar'
import Beranda from '../components/beranda'
import Tentang from '../components/tentang'
import Fitur from '../components/fitur'
import Kontak from '../components/kontak'
import Footer from '../components/footer'

export default function Home() {
  return (
      <main className='text-slate-600 space-y-6 xl:space-y-[120px] scroll-smooth font-lato'>
        <Navbar />
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
        <Footer />
      </main>
  )
}
