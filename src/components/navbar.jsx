import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { isAndroid, isIOS } from 'react-device-detect';

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
                        <Link
                            href={isAndroid ? 'https://play.google.com/store/apps/details?id=com.ag.agforce&hl=id' : (isIOS ? 'https://apps.apple.com/us/app/ag-force/id6444120625bit.ly/agforceios' : '#kontak')}
                            scroll={false}
                        >
                            <button
                                className="w-full bg-white text-primary font-semibold py-4 px-6 rounded-full text-[16px]"
                                onClick={() => setOpen(false)}
                            >
                                Unduh Sekarang
                            </button>
                        </Link>
                    </div>
                </div>
            )
        }
    }

    // if (isAndroid) {
    //     console.log('android');
    // } else if (isIOS) {
    //     console.log('iOS');
    // } else {
    //     console.log('gatau');
    // }
    return (
        <>
            <div className="bg-white w-full fixed top-0 z-50">
                <div className="container mx-auto py-3 px-2">
                    <div className="flex items-center justify-between gap-10 w-full sr-only lg:not-sr-only lg:h-auto">
                        <Link href='/'>
                            <Image src={'/logo.png'} width={400} height={100} alt="logo" className="w-[132px] h-auto cursor-pointer" />
                        </Link>
                        <div className="flex items-center gap-[60px]">
                            {menuItem.map((data, i) => (
                                <Link href={data.link} key={i} scroll={false}>
                                    <button className="text-[22px] text-slate-500 hover:text-primary font-semibold transition-all duration-200">{data.name}</button>
                                </Link>
                            ))}
                            <Link
                                href={isAndroid ? 'https://apps.apple.com/us/app/ag-force/id6444120625bit.ly/agforceios' : (isIOS ? 'https://play.google.com/store/apps/details?id=com.ag.agforce&hl=id' : '#kontak')}
                                scroll={false}
                            >
                                <button
                                    className="bg-primary text-white font-semibold py-4 px-6 rounded-full text-[16px] ring-2 ring-primary hover:bg-white hover:text-primary transition-all duration-300"
                                >
                                    Unduh Sekarang
                                </button>
                            </Link>
                        </div>
                    </div>
                    {/* mobile nav */}
                    <div className="visible lg:sr-only w-full relative bg-white py-2">
                        <div className="flex items-center justify-between">
                            <Link href='/'>
                                <Image src={'/logo.png'} width={400} height={100} alt="logo" className="w-[132px] h-auto cursor-pointer" />
                            </Link>
                            <div onClick={() => setOpen(!open)} className="text-white bg-primary p-1 text-[24px] rounded-md cursor-pointer" >
                                <Icon icon={open ? "material-symbols:close-rounded" : "gg:menu-left-alt"} className="rotate-180 transition-all duration-300" />
                            </div>
                        </div>
                    </div>
                    <div className={`${open ? "container" : "w-0"} bg-primary absolute transition-all duration-300 ease-in-out infinite`}>
                        <ModalMenu />
                    </div>
                </div>
            </div>
        </>
    )
}