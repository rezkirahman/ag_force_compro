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
    
    const MobileNav = () => {
        return (
            <div className={`${open ? 'scale-100' : 'scale-0'} w-full h-full fixed bg-white bg-opacity-80 transition-all`} onClick={() => setOpen(false)}>
                <div className="flex flex-col text-white p-3 space-y-6 bg-primary transition-all" onClick={e => e.stopPropagation()}>
                    {menuItem.map((data, i) => (
                        <Link href={data.link} key={i} scroll={false} onClick={() => setOpen(false)}>
                            <button className="text-[18px] hover:text-white transition-all duration-300">{data.name}</button>
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

    const DesktopNav = () => {
        return (
            <div className="container mx-auto py-3 px-2">
                <div className="flex items-center justify-between gap-10 w-full sr-only lg:not-sr-only lg:h-auto">
                    <Link href='/'>
                        <Image src={'/logo.png'} width={400} height={100} alt="logo" className="w-[132px] h-auto cursor-pointer" />
                    </Link>
                    <div className="flex items-center gap-[60px]">
                        {menuItem.map((data, i) => (
                            <Link href={data.link} key={i} scroll={false}>
                                <button className="text-lg text-slate-400 hover:text-primary font-semibold transition-all">{data.name}</button>
                            </Link>
                        ))}
                        <Link
                            className="bg-primary text-white font-semibold py-4 px-6 rounded-full text-[16px] ring-2 ring-primary hover:bg-white hover:text-primary transition-all duration-300"
                            href='https://play.google.com/store/apps/details?id=com.ag.agforce&pli=1'
                            scroll={false}
                            target="_blank"
                        >
                            Unduh Sekarang
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
        )
    }

    const DropMenu = () => {
        return (
            <div className="group/dropmenu relarive">
                <div className="flex items-center text-lg text-slate-400 font-semibold">
                    <h3>Drop menu</h3>
                    <Icon icon='material-symbols:arrow-drop-up-rounded' className="text-4xl rotate-180 group-hover/dropmenu:rotate-0 transition-all" />
                </div>
                <div className="absolute group-hover/dropmenu:h-auto w-60 h-auto shadow-xl rounded-lg bg-white transition-all group-hover/dropmenu:p-2 group-hover/dropmenu:ring-1 group-hover/dropmenu:ring-slate-100">
                    <div className="group-hover/dropmenu:not-sr-only sr-only transition-all">
                        <div className="space-y-2 font-medium text-slate-400 text-base">
                            <h3 className="cursor-pointer p-3 hover:bg-slate-100 rounded-lg transition-all">Dashboard</h3>
                            <div className="group/menu flex items-center justify-between cursor-pointer p-3 hover:bg-slate-100 rounded-lg transition-all">
                                <h3>Menu</h3>
                                <Icon icon='material-symbols:arrow-forward-ios-rounded' />
                                <div className="absolute -right-[140px] group-hover/menu:h-auto w-40 h-0 shadow-xl rounded-lg bg-white transition-all group-hover/menu:p-2 group-hover/menu:ring-1 group-hover/menu:ring-slate-100">
                                    <div className="p-2 sr-only group-hover/menu:not-sr-only">
                                        <div className="space-y-2 font-medium text-slate-400 text-base">
                                            <h3 className="cursor-pointer p-3 hover:bg-slate-100 rounded-lg transition-all">Overview</h3>
                                            <h3 className="cursor-pointer p-3 hover:bg-slate-100 rounded-lg transition-all">Billings</h3>
                                            <h3 className="cursor-pointer p-3 hover:bg-slate-100 rounded-lg transition-all">Rewards</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3 className="cursor-pointer p-3 hover:bg-slate-100 rounded-lg transition-all">Setting</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="bg-white w-full fixed top-0 z-50">
                <div className="relative">
                    <DesktopNav />
                    <MobileNav />
                </div>
            </div>
        </>
    )
}
