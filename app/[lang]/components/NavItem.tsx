'use client'
import Link from "next/link";
import { useState } from 'react';

type NavItemProps = {
    id: number;
    text: string
    href: string
}

export default function NavItem({ id, text, href }: NavItemProps) {
    const [active, setActive] = useState(0);

    return (
        <li
            className={`${active === id ? "bg-[#1a1a64] text-white" : ""} transition-all duration-300 hover:bg-[#1a1a64] hover:text-white hover:border-xl rounded p-2`}>
            <Link href={href} id={String(id)} onClick={(e) => {
                const target = e.target as HTMLLinkElement
                setActive(Number(target.id))
                }}>
                {text}
            </Link>
        </li>
    );
}