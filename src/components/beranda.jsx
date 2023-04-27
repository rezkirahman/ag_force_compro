import Image from "next/image";

export default function Index() {
    return (
        <>
            <div className="flex flex-col justify-between gap-6 items-center text-center lg:h-screen bg-blue-50">
                <div className="container mt-28 px-2">
                    <h3 className="text-2xl font-black lg:text-[48px]">KOORDINASI, KOLABORASI, KOMUNIKASI</h3>
                    <h3 className="mt-2 lg:text-2xl max-w-[1024px] mx-auto">Berkoordinasi semakin mudah. Berkolaborasi satu sama lain di setiap keadaan. Berkomunikasi dalam menyampaikan kejadian di sekitar dan informasi lainnya.</h3>
                </div>
                <Image src={'/hero.svg'} width={1000} height={0} className="w-full mt-7" alt="hero" priority/>
            </div>
        </>
    )
}