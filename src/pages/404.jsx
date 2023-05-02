import Navbar from "@/components/navbar"
import { Icon } from "@iconify/react"
import Link from "next/link"
import Router from "next/router"
export default function notFound() {
    return (
        <main className='text-slate-600 scroll-smooth mx-auto'>
            <div className="flex flex-col items-center justify-center h-screen text-center">
                <h3 className="text-[100px] lg:text-[260px] font-bold text-slate-400">4<span className="text-primary">0</span>4</h3>
                <h3 className="text-slate-500 text-lg lg:text-2xl">Halaman Tidak Ditemukan</h3>
                <button onClick={() => Router.back()} className="px-4 py-3 mt-4 bg-primary text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-opacity-10 hover:text-primary hover:font-medium group transition-all w-[200px] lg:w-[280px]">
                    <Icon icon="material-symbols:arrow-back-rounded" className="text-xl group-hover:rotate-45 transition-all" />
                    Kembali
                </button>
            </div>
        </main>

    )
}