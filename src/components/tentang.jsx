import Image from "next/image"
import Link from "next/link";
import { isAndroid, isIOS } from "react-device-detect";
export default function Index() {
    return (
        <>
            <div className="space-y-5 container mx-auto lg:grid lg:grid-cols-2 lg:gap lg:h-screen flex flex-col items-center px-2">
                <div className="space-y-6">
                    <h3 className="text-center text-xl font-semibold lg:text-4xl lg:text-left">
                        Aman dengan <span className="text-primary">AG FORCE</span>
                    </h3>
                    <div className="text-center space-y-4 lg:text-xl lg:text-left xl:text-2xl xl:leading-normal">
                        <h3> Sekarang bertugas di lapangan semakin tenang dan terjaga karena kamu akan saling mengetahui lokasi teman-teman kamu yang sedang bertugas.</h3>
                        <h3>Ada insiden yang terjadi di sekitar kamu? Tenang saja, kamu bisa segera melaporkan insiden tersebut dan teman-teman kamu bisa melihat secara langsung dimana insiden terjadi dan siap membantu.</h3>
                        <h3>Dengan AG Force, segalanya jadi lebih mudah, lebih terjaga, dan lebih tenang.</h3>
                    </div>
                </div>
                <div className="">
                    <Image src={'/tentang.png'} priority width={300} height={0} className="w-4/5 lg:w-4/5 mx-auto grow" alt="cs" />
                </div>
                <Link
                    href={isAndroid ? 'https://play.google.com/store/apps/details?id=com.ag.agforce&hl=id' : (isIOS ? 'https://apps.apple.com/us/app/ag-force/id6444120625bit.ly/agforceios' : '#kontak')}
                    className="bg-white text-[12px] lg:text-base lg:py-4 lg:px-6 rounded-full py-3 px-4 ring-2 ring-white text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                    scroll={false}
                >
                    Unduh Sekarang
                </Link>
            </div>
        </>
    )
}