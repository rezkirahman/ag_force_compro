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

export default function Index(props) {
    const [open, setOpen] = useState(false)
    const ModalMenu = () => {
        return (
            <div className={`${open ? 'w-full h-full' : 'h-0 overflow-clip'} fixed bg-white bg-opacity-80 transition-all duration-300 ease-in-out`} onClick={() => setOpen(false)}>
                <div className="flex flex-col text-white p-3 space-y-6 bg-primary transition-all" onClick={e => e.stopPropagation()}>
                    {menuItem.map((data, i) => (
                        <Link href={data.link} key={i} scroll={false} onClick={() => setOpen(false)}>
                            <button className="text-[22px] hover:text-white transition-all duration-300">{data.name}</button>
                        </Link>
                    ))}
                    <Link
                        href={props.isAndroid ? 'https://play.google.com/store/apps/details?id=com.ag.agforce&hl=id' : (props.isIOS ? 'https://apps.apple.com/us/app/ag-force/id6444120625bit.ly/agforceios' : '#kontak')}
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
                <div className="relative">
                    <div className="container mx-auto py-3 px-2">
                        <div className="flex items-center justify-between gap-10 w-full sr-only lg:not-sr-only lg:h-auto">
                            <Link href='/'>
                                <Image src={'/logo.png'} width={400} height={100} alt="logo" className="w-[132px] h-auto cursor-pointer" />
                            </Link>
                            <div className="flex items-center gap-[60px]">
                                {menuItem.map((data, i) => (
                                    <Link href={data.link} key={i} scroll={false}>
                                        <button className="text-[18px] text-slate-400 hover:text-primary font-semibold transition-all">{data.name}</button>
                                    </Link>
                                ))}
                                <Link
                                    href={props.isAndroid ? 'https://apps.apple.com/us/app/ag-force/id6444120625bit.ly/agforceios' : (props.isIOS ? 'https://play.google.com/store/apps/details?id=com.ag.agforce&hl=id' : '#kontak')}
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
                        <div className="visible lg:sr-only w-full bg-white py-2">
                            <div className="flex items-center justify-between">
                                <Link href='/'>
                                    <Image src={'/logo.png'} width={400} height={100} alt="logo" className="w-[132px] h-auto cursor-pointer" />
                                </Link>
                                <div onClick={() => setOpen(!open)} className="text-white bg-primary p-1 text-[24px] rounded-md cursor-pointer" >
                                    <Icon icon={open ? "material-symbols:close-rounded" : "gg:menu-left-alt"} className="rotate-180 transition-all duration-300" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <ModalMenu />

                </div>
            </div>
        </>
    )
}
