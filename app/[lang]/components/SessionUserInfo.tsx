'use client';

import getSession, { destroySession } from "@/lib/session";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function SessionUserInfo() {
    const [session, setSession] = useState() as any;
    useEffect(() => {
        const sessionUser = getSession();
        setSession(sessionUser)
    }, [])

    return (<ul className="hidden md:flex text-white gap-10">
        {(session && session.email) ? (
            <>
                <li className="text-[#1a1a64] cursor-default hover:underline hover:border-xl rounded px-4 py-2">
                    {session.email}
                </li>
                <li className="bg-[#1a1a64] hover:bg-black text-white hover:text-white hover:underline hover:border-xl rounded px-4 py-2">
                    <button onClick={() => destroySession()}>Logout</button>
                </li>
            </>
        ) : (
            <li className="bg-[#1a1a64] hover:bg-black text-white hover:text-white hover:underline hover:border-xl rounded px-4 py-2">
                <Link href="/login" id="5">
                    Login
                </Link>
            </li>
        )}
    </ul>)
}