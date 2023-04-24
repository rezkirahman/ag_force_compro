import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const menuItem = [
    {
        name: "Beranda",
        link: '#beranda'
    },
    {
        name: "Tentang",
        link: '#tentang'

    },
    {
        name: "Fitur",
        link: '#fitur'
    },
    {
        name: "Kontak",
        link: '#kontak'
    },
]

export default function Index() {
    const [open, setOpen] = useState(false)
    const ModalMenu = () => {
        if (open) {
            return (
                <div className="w-full h-auto">
                    <div className="flex flex-col text-white m-3 space-y-6">
                        {menuItem.map((data, i) => (
                            <Link href={data.link} key={i} scroll={false} onClick={() => setOpen(false)}>
                                <button className="text-[22px] hover:text-white transition-all duration-300">{data.name}</button>
                            </Link>
                        ))}
                    </div>
                </div>
            )
        }
    }
    return (
        <div className="bg-white w-full sticky top-0 z-50">
            <div className=" mt-6 container mx-auto py-3">
                <div className="flex items-center justify-between gap-10 w-full invisible lg:visible overflow-clip h-0 lg:h-auto">
                    <Link href='/'>
                        <Image src={'/logo.png'} width={400} height={100} alt="logo" className="w-[132px] h-auto cursor-pointer" />
                    </Link>
                    <div className="flex items-center gap-[60px]">
                        {menuItem.map((data, i) => (
                            <Link href={data.link} key={i} scroll={false}>
                                <button className="text-[22px] text-slate-500 hover:text-primary font-semibold transition-all duration-300">{data.name}</button>
                            </Link>
                        ))}
                        <button className="bg-primary text-white font-semibold py-4 px-6 rounded-full text-[16px] hover:shadow-xl transition-all duration-500">Unduh Sekarang</button>
                    </div>
                </div>
                {/* mobile nav */}
                <div className="visible lg:invisible w-full h-auto lg:h-0 relative">
                    <div className="flex items-center justify-between ">
                        <Link href='/'>
                            <Image src={'/logo.png'} width={400} height={100} alt="logo" className="w-[132px] h-auto cursor-pointer" />
                        </Link>
                        <div onClick={() => setOpen(!open)} className="text-white bg-primary p-1 text-[24px] rounded-md cursor-pointer" >
                            <Icon icon={open ? "material-symbols:close-rounded" : "gg:menu-left-alt"} className="rotate-180" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${open ? "w-full" : "w-0"} bg-primary absolute transition-all duration-300 ease-in-out infinite`}>
                <ModalMenu />
            </div>
        </div>
    )
}