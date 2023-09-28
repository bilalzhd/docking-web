'use client'
import Link from "next/link";
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import SessionUserInfo from "./SessionUserInfo";

type ResponsiveMenuProps = {
    menuItems: MenuItem[]
}

export default function ResponsiveMenu({ menuItems }: ResponsiveMenuProps) {
    const [active, setActive] = useState(0)
    const [toggle, setToggle] = useState(false)
    return (
        <>
            {toggle ? (
                < AiOutlineClose
                    onClick={() => setToggle(false)}
                    className="text-2xl md:hidden block"
                />
            ) : (
                <AiOutlineMenu
                    onClick={() => setToggle(true)}
                    className="text-black cursor-pointer text-2xl md:hidden block"
                />
            )}
            < ul className={`md:hidden w-full h-screen z-20 text-white fixed top-[92px] bg-black ${toggle ? "left-[0]" : "left-[-100%]"}`
            }>
                {
                    menuItems.map((menuItem: MenuItem, index: number) => (
                        <li key={index} className="p-5">
                            <Link
                                href={menuItem.href}
                                id={String(index)}
                                onClick={(e) => setActive(e.target.id)}
                                style={
                                    active === index ? { color: "rgb(255, 230, 200)", fontWeight: "bold" } : {}
                                }>
                                {menuItem.text}
                            </Link>
                        </li>
                    ))
                }
                <SessionUserInfo />
            </ul>
        </>
    );
}