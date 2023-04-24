import Image from "next/image";

export default function Index() {
    return (
        <>
            <div className="flex flex-col justify-center items-center text-center">
                <div className="container">
                    <h3 className="text-[16px] font-black lg:text-[48px]">KOORDINASI, KOLABORASI, KOMUNIKASI</h3>
                    <h3 className="mt-2 lg:text-2xl">Berkoordinasi semakin mudah. Berkolaborasi satu sama lain di setiap keadaan. Berkomunikasi dalam menyampaikan kejadiandi sekitar dan informasi lainnya.</h3>
                </div>
                <Image src={'/hero.svg'} width={1000} height={0} className="w-full mt-7" alt="hero" priority/>
            </div>
        </>
    )
}