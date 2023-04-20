import Image from "next/image"
export default function Index() {
    return (
        <>
            <div className="space-y-5">
                <h3 className="text-center text-[22px] font-semibold">
                    Aman dengan <span className="text-primary">AG FORCE</span>
                </h3>
                <div className="space-y-6">
                    <Image src={'/tentang.png'} width={190} height={190} className="w-1/2 mx-auto lg:w-1/3" alt="cs"/>
                    <div>
                        <div className="text-center space-y-4">
                            <h3> Sekarang bertugas di lapangan semakin tenang dan terjaga karena kamu akan saling mengetahui lokasi teman-teman kamu yang sedang bertugas.</h3>
                            <h3>Ada insiden yang terjadi di sekitar kamu? Tenang saja, kamu bisa segera melaporkan insiden tersebut dan teman-teman kamu bisa melihat secara langsung dimana insiden terjadi dan siap membantu.</h3>
                            <h3>Dengan AG Force, segalanya jadi lebih mudah, lebih terjaga, dan lebih tenang.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}