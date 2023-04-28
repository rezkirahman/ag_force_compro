import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { isAndroid, isIOS } from "react-device-detect";

export default function name() {
    return (
        <div className="bg-primary w-full h-1/2 flex flex-col items-center">
            <div className="container mx-auto py-8 px-2">
                <div className="flex items-center justify-between">
                    <div className="bg-white">
                        <Image src={'/logo.png'} width={400} height={100} alt="" className="w-[74px] h-auto lg:w-[140px]" />
                    </div>
                    <button>
                        <Link
                            href={isAndroid ? 'https://play.google.com/store/apps/details?id=com.ag.agforce&hl=id' : (isIOS ? 'https://apps.apple.com/us/app/ag-force/id6444120625bit.ly/agforceios' : '#kontak')}
                            className="bg-white rounded-full py-4 px-6 ring-2 ring-white text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                            scroll={false}
                        >
                            Unduh Sekarang
                        </Link>
                    </button>
                </div>
                <div className="space-y-5 lg:space-y-0 text-white mt-8 lg:flex lg:items-center lg:justify-between">
                    <Link
                        href='https://www.google.com/maps/place/Gedung+Artha+Graha/@-6.2245713,106.8083803,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f1574fae0a51:0xad8da206c5b929e9!8m2!3d-6.2245766!4d106.8109552!16s%2Fg%2F1tq1l7q4'
                        className="flex gap-3 lg:max-w-[50%]"
                        target="_blank"
                    >
                        <div className="w-8 pt-1">
                            <Icon icon="material-symbols:location-on-rounded" className="text-[32px]" />
                        </div>
                        <h3 className="text-[14px] hover:underline"> Gedung Artha Graha, Jl. Jend. Sudirman kav 52-53 No. Kav 52-53, RT 5/RW 3, Senayan, Kebayoran Baru Kota Jakarta Selatan, Jakarta 12190
                        </h3>
                    </Link>
                    <Link
                        href='mailto:admin.mail@aig-id.com'
                        target="_blank"
                        className="flex items-center gap-3">
                        <div className="w-8">
                            <Icon icon="material-symbols:mail-rounded" className="text-[32px]" />
                        </div>
                        <h3 className="text-[14px] hover:underline">
                            admin.mail@aig-id.com
                        </h3>
                    </Link>
                    <Link
                        href='https://wa.me/+6282129819050'
                        target="_blank"
                        className="flex items-center gap-3">
                        <div className="w-8">
                            <Icon icon="material-symbols:call" className="text-[32px]" />
                        </div>
                        <h3 className="text-[14px] hover:underline">
                            +62 821-2981-9050
                        </h3>
                    </Link>
                    <div>
                        <Link
                            href='/terms-of-service'
                            target='_blank'
                        >
                            <h3 className="text-[14px] hover:underline">Syarat & Ketentuan</h3>
                        </Link>
                    </div>
                    <div>
                        <Link
                            href='/terms-of-service'
                            target='_blank'
                        >
                            <h3 className="text-[14px] hover:underline">Kebijakan Privasi</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}