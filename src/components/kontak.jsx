import Image from "next/image";
import Link from "next/link";

export default function Index() {
    return (
        <>
            <div className="lg:h-screen lg:flex flex-col justify-center">
                <div className="container space-y-6 lg:space-y-20 mx-auto">
                    <div className="px-2">
                        <div className="bg-blue-100 p-4 mx-auto rounded-2xl flex items-center justify-between lg:px-16 lg:p-10">
                            <div className="space-y-1 w-2/3 xl:space-y-5">
                                <h3 className="font-semibold lg:text-2xl xl:text-5xl">Kontak Kami</h3>
                                <div className="text-[12px] lg:text-xl xl:text-2xl">
                                    <h3>
                                        Ada pertanyaan atau permasalahan seputar AG Force?</h3>
                                    <h3>
                                        Hubungi melalui email: <Link href='mailto:cs@aig-id.com' target='_blank'><span className="text-primary cursor-pointer hover:underline">cs@aig-id.com</span></Link>
                                    </h3>
                                    <h3>
                                        Hubungi melalui WhatsApp: <Link href='https://wa.me/+6282129819050' target='_blank'><span className="text-primary break-keep cursor-pointer slashed-zero hover:underline">+62 821-2981-9050</span></Link>
                                    </h3>
                                </div>

                            </div>
                            <div className="xl:w-[200px]">
                                <Image src={'/mail.svg'} alt="" width={400} height={0} className="w-[100px] lg:w-[160px] xl:w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <Image src={'/kontak-left.png'} width={400} height={0} alt="image-left" className="w-[72px] sm:w-[120px] md:w-[160px] lg:w-[280px]" />
                        <div className="text-center space-y-2 lg:space-y-4">
                            <h3 className="font-semibold md:text-xl lg:text-3xl xl:text-5xl">Unduh<span className="text-primary"> AG FORCE </span>Sekarang</h3>
                            <h3 className="text-sm lg:text-xl xl:text-2xl">Gratis aplikasinya, kerja semakin aman dan tenang.</h3>
                            <div className="flex items-center justify-center gap-2 sr-only lg:not-sr-only">
                                <Link
                                    href='https://apps.apple.com/us/app/ag-force/id6444120625bit.ly/agforceios'
                                    target='_blank'
                                >
                                    <Image src={'/appStore.svg'} width={400} height={0} alt="" className="w-[90px] md:w-[160px] lg:w-[220px] xl:w-[280px] cursor-pointer" />
                                </Link>
                                <Link
                                    href='https://play.google.com/store/apps/details?id=com.ag.agforce&hl=id'
                                    target='_blank'
                                >
                                    <Image src={'/googlePlay.svg'} width={400} height={0} alt="" className="w-[90px] md:w-[160px] lg:w-[220px] xl:w-[280px] cursor-pointer" />
                                </Link>
                            </div>
                        </div>
                        <Image src={'/kontak-right.png'} width={400} height={0} alt="image-right" className="w-[72px] sm:w-[120px] md:w-[160px] lg:w-[280px]" />
                    </div>
                    <div className="not-sr-only lg:sr-only px-2 pt-4">
                        <div className="grid grid-cols-2 items-center justify-center gap-2">
                            <Link
                                href='https://apps.apple.com/us/app/ag-force/id6444120625bit.ly/agforceios'
                                target='_blank'
                            >
                                <Image src={'/appStore.svg'} width={400} height={0} alt="" className="w-full h-auto cursor-pointer" />
                            </Link>
                            <Link
                                href='https://play.google.com/store/apps/details?id=com.ag.agforce&hl=id'
                                target='_blank'
                            >
                                <Image src={'/googlePlay.svg'} width={400} height={0} alt="" className="w-full h-auto cursor-pointer" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}