import { Icon } from "@iconify/react";
import Image from "next/image";

export default function name() {
    return (
        <div className="bg-primary w-full h-1/2 flex flex-col items-center">
            <div className="container mx-auto py-8 px-2">
                <div className="flex items-center justify-between">
                    <div className="bg-white">
                        <Image src={'/logo.png'} width={400} height={100} alt="" className="w-[74px] h-auto lg:w-[140px]"/>
                    </div>
                    <button className="bg-white rounded-full py-2 px-3 text-primary font-semibold">
                        Unduh Sekarang
                    </button>
                </div>
                <div className="space-y-5 lg:space-y-0 text-white mt-8 lg:flex lg:items-center lg:justify-between">
                    <div className="flex gap-3 lg:max-w-[50%]">
                        <div className="w-8 pt-1">
                            <Icon icon="material-symbols:location-on-rounded" className="text-[32px]" />
                        </div>
                        <h3 className="text-[14px]"> Gedung Artha Graha, Jl. Jend. Sudirman kav 52-53 No. Kav 52-53, RT 5/RW 3, Senayan, Kebayoran Baru Kota Jakarta Selatan, Jakarta 12190
                        </h3>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-8">
                            <Icon icon="material-symbols:mail-rounded" className="text-[32px]" />
                        </div>
                        <h3 className="text-[14px]">
                            admin.mail@aig-id.com
                        </h3>
                    </div>
                    <h3 className="text-[14px]">Syarat & Ketentuan</h3>
                    <h3 className="text-[14px]">Kebijakan Pribadi</h3>
                </div>
            </div>
        </div>
    )
}