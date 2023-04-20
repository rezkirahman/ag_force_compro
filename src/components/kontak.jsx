import Image from "next/image";

export default function Index() {
    return (
        <>
            <div className="container space-y-6 mx-auto">
                <div className="px-2">
                    <div className="bg-blue-100 p-4 mx-auto rounded-2xl flex items-center justify-between">
                        <div className="space-y-1 w-2/3">
                            <h3 className="font-semibold">Kontak Kami</h3>
                            <h3 className="text-[12px]">
                                Ada pertanyaan atau permasalahan seputar AG Force?<br />
                                Kirim melalui email: <span className="text-primary cursor-pointer">admin.mail@aig-id.com</span>
                            </h3>
                        </div>
                        <div>
                            <Image src={'/mail.png'} alt="" width={76} height={0} />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <Image src={'/kontak-left.png'} width={72} height={0} alt="image-left" className="w-[72px] lg:scale-150"/>
                    <div className="text-center">
                        <h3 className="font-semibold">Unduh<span className="text-primary"> AG FORCE </span>Sekarang</h3>
                        <h3 className="text-[10px]">Gratis aplikasinya, kerja semakin aman dan tenang.</h3>
                        <div className="flex items-center justify-center gap-2 mt-2">
                            <Image src={'/appStore.png'} width={91} height={0} alt="" />
                            <Image src={'/googlePlay.png'} width={91} height={0} alt="" />
                        </div>
                    </div>
                    <Image src={'/kontak-right.png'} width={72} height={0} alt="image-right" />
                </div>
            </div>
        </>
    )
}