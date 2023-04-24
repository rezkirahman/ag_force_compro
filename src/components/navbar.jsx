import { Icon } from "@iconify/react";
import Image from "next/image";

const menuItem = [
    {
        name: "Beranda"
    },
    {
        name: "Tentang"
    },
    {
        name: "Fitur"
    },
    {
        name: "Kontak"
    },
]

export default function Index() {
    return (
        <>
            <div className=" mt-6 container mx-auto">
                <div className="flex items-center justify-between gap-10 w-full invisible lg:visible overflow-clip h-0 lg:h-auto">
                    <Image src={'/logo.png'} width={400} height={0} alt="logo" className="w-[132px]"/>
                    <div className="flex items-center gap-[60px]">
                        {menuItem.map((data, i) => (
                            <button key={i} className="text-[22px] text-slate-500 hover:text-primary font-semibold transition-all duration-300">{data.name}</button>
                        ))}
                        <button className="bg-primary text-white font-semibold py-4 px-6 rounded-full text-[16px] hover:scale-105 transition-all duration-500">Unduh Sekarang</button>
                    </div>
                </div>
                {/* mobile nav */}
                <div className="visible lg:invisible w-full h-auto lg:h-0">
                    <div className="flex items-center justify-between ">
                        <Image src={'/logo.png'} width={400} height={0} alt="logo" className="w-[132px]"/>
                        <div className="text-white bg-primary p-1 text-[24px] rounded-md">
                            <Icon icon="gg:menu-left-alt" className="rotate-180" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}