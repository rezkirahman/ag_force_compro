import Image from "next/image";

export default function Index() {
    return (
        <>
            <div className="container space-y-6 xl:space-y-20 mx-auto">
                <div className="px-2">
                    <div className="bg-blue-100 p-4 mx-auto rounded-2xl flex items-center justify-between">
                        <div className="space-y-1 w-2/3 xl:space-y-5">
                            <h3 className="font-semibold lg:text-2xl xl:text-5xl">Kontak Kami</h3>
                            <h3 className="text-[12px] lg:text-xl xl:text-2xl">
                                Ada pertanyaan atau permasalahan seputar AG Force?<br />
                                Kirim melalui email: <span className="text-primary cursor-pointer">admin.mail@aig-id.com</span>
                            </h3>
                        </div>
                        <div className="xl:w-[200px]">
                            <Image src={'/mail.svg'} alt="" width={400} height={0} className="w-[100px] lg:w-[160px] xl:w-full"/>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <Image src={'/kontak-left.png'} width={400} height={0} alt="image-left" className="w-[72px] md:w-[160px] lg:w-[240px]"/>
                    <div className="text-center space-y-2 lg:space-y-4">
                        <h3 className="font-semibold md:text-xl lg:text-3xl xl:text-5xl">Unduh<span className="text-primary"> AG FORCE </span>Sekarang</h3>
                        <h3 className="text-[10px] md:text-base lg:text-xl xl:text-2xl">Gratis aplikasinya, kerja semakin aman dan tenang.</h3>
                        <div className="flex items-center justify-center gap-2">
                            <Image src={'/appStore.svg'} width={400} height={0} alt="" className="w-[90px] md:w-[160px] lg:w-[220px] xl:w-[280px] cursor-pointer"/>
                            <Image src={'/googlePlay.svg'} width={400} height={0} alt="" className="w-[90px] md:w-[160px] lg:w-[220px] xl:w-[280px] cursor-pointer"/>
                        </div>
                    </div>
                    <Image src={'/kontak-right.png'} width={400} height={0} alt="image-right" className="w-[72px] md:w-[160px] lg:w-[240px]"/>
                </div>
            </div>
        </>
    )
}