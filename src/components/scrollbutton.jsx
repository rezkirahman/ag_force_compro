import { Icon } from "@iconify/react";
import Link from "next/link";

export default function ScrollButton(props) {
    return (
        <Link href={props.link} className='p-4 bg-primary fixed bottom-6 right-6 z-50 text-white rounded-full shadow-lg'>
            <Icon icon='akar-icons:align-to-top' className='lg:text-2xl' />
        </Link>
    );
}