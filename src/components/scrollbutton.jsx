import { Icon } from "@iconify/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ScrollButton() {
    const [show, setShow] = useState(false)
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener("scroll", () => {
                if (window.pageYOffset > 400) {
                    setShow(true);
                } else {
                    setShow(false);
                }
            });
        }
    }, [])
    //if (show) { return null }
    if (!show) { return null }
    return (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='p-4 bg-primary fixed bottom-6 right-6 z-50 text-white rounded-full shadow-lg'>
            <Icon icon='akar-icons:align-to-top' className='lg:text-2xl' />
        </button>
    );
}