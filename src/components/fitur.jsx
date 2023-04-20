import Image from "next/image";

const fiturCard = [
    {
        name: 'On Duty',
        image: '/fitur/power.png',
        desc: 'Mau bertugas? Jangan lupa nyalakan ON Duty agar tetap aman dan terjaga.',
    },
    {
        name: 'Laporan Aktifitas',
        image: '/fitur/report.png',
        desc: 'Buat laporan aktivitasmu selama bertugas dan laporanmu akan tersimpan.',
    },
    {
        name: 'Obrolan',
        image: '/fitur/message.png',
        desc: 'Bertugas semakin responsif dan komunikasi tetap terjaga satu sama lain.',
    },
    {
        name: 'View Incident',
        image: '/fitur/warning.png',
        desc: 'Lihat setiap kejadian yang terjadi di sekitarmu dan kamu bisa segera menolongnya.',
    },
    {
        name: 'AGI Cash',
        image: '/fitur/agicash.png',
        desc: 'Nikmati mudahnya pembayaran dengan QRIS dan raih cashback yang berlimpah.',
    },
    {
        name: 'Tombol SOS',
        image: '/fitur/sos.png',
        desc: 'Gunakan jika ada kejadian darurat dan tim akan segera datang dan menolongmu.',
    },
]

export default function Index() {

    return (
        <>
            <div className="bg-blue-50 py-[35px] px-4">
                <h3 className="text-center text-[22px] font-semibold">
                    Fitur andalan <span className="text-primary">AG FORCE</span>
                </h3>
                <div className="flex gap-6 overflow-auto mx-auto py-4 md:w-full md:flex-wrap md:justify-center">
                    {fiturCard.map((data, i) => (
                        <div key={i} align="center" className="bg-white rounded-xl p-3 w-[240px]">
                            <div className="h-[150px] w-[200px] flex flex-col items-center justify-center">
                                <Image src={data.image} width={80} height={80} className="" alt="feature" />
                            </div>
                            <h3 className="font-semibold">{data.name}</h3>
                            <h3 className="text-[14px] mt-4">{data.desc}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
