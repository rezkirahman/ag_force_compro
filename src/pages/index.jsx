import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar'
import Beranda from '../components/beranda'
import Tentang from '../components/tentang'
import Fitur from '../components/fitur'
import Kontak from '../components/kontak'
import Footer from '../components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='text-slate-600 space-y-6 xl:space-y-20'>
      <Navbar />
      <Beranda />
      <Tentang />
      <Fitur />
      <Kontak />
      <Footer />
    </main>

  )
}
