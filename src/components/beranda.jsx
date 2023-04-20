import Image from "next/image";

export default function Index() {
    return (
        <>
            <div className="flex flex-col justify-center items-center text-center">
                <h3 className="text-[16px] font-bold">KOORDINASI, KOLABORASI, KOMUNIKASI</h3>
                <h3 className="mt-2">Berkoordinasi semakin mudah. Berkolaborasi satu sama lain di setiap keadaan. Berkomunikasi dalam menyampaikan kejadiandi sekitar dan informasi lainnya.</h3>
                <Image src={'/hero.png'} width={2000} height={0} className="w-full mt-7" alt="hero"/>
            </div>
        </>
    )
}