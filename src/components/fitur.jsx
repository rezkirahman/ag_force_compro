import Image from "next/image";

const fiturCard = [
    {
        name: 'On Duty',
        image: '/fitur/power.svg',
        desc: 'Mau bertugas? Jangan lupa nyalakan ON Duty agar tetap aman dan terjaga.',
    },
    {
        name: 'Laporan Aktifitas',
        image: '/fitur/report.svg',
        desc: 'Buat laporan aktivitasmu selama bertugas dan laporanmu akan tersimpan.',
    },
    {
        name: 'Obrolan',
        image: '/fitur/message.svg',
        desc: 'Bertugas semakin responsif dan komunikasi tetap terjaga satu sama lain.',
    },
    {
        name: 'View Incident',
        image: '/fitur/warning.svg',
        desc: 'Lihat setiap kejadian yang terjadi di sekitarmu dan kamu bisa segera menolongnya.',
    },
    {
        name: 'AGI Cash',
        image: '/fitur/agicash.png',
        desc: 'Nikmati mudahnya pembayaran dengan QRIS dan raih cashback yang berlimpah.',
    },
    {
        name: 'Tombol SOS',
        image: '/fitur/sos.svg',
        desc: 'Gunakan jika ada kejadian darurat dan tim akan segera datang dan menolongmu.',
    },
]

export default function Index() {

    return (
        <>
            <div className="bg-blue-50 py-[35px] lg:h-screen flex flex-col items-center">
                <div className="m-auto space-y-14">
                    <h3 className="text-center text-[22px] font-semibold lg:text-5xl">
                        Fitur andalan <span className="text-primary">AG FORCE</span>
                    </h3>
                </div>
                <div className="max-w-full md:container">
                    <div className="flex gap-6 overflow-auto mx-auto py-4 md:w-full md:grid md:grid-cols-3 md:justify-center md:p-2 md:overflow-hidden">
                        {fiturCard.map((data, i) => (
                            <div key={i} align="center" className="bg-white rounded-xl p-3 lg:rounded-3xl lg:py-8 lg:px-6 hover:scale-105 transition-all duration-500 ">
                                <div className="h-[100px] w-[150px] flex flex-col items-center justify-center xl:w-[120px] xl:h-[120px]">
                                    <Image src={data.image} width={80} height={80} className="w-[60px] xl:w-[80px] h-auto" alt="feature" />
                                </div>
                                <h3 className="font-semibold xl:text-2xl">{data.name}</h3>
                                <h3 className="text-[14px] mt-4 xl:text-xl">{data.desc}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
