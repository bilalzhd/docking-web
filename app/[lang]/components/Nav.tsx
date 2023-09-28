// import { useState, useRef, useEffect } from "react";
import Link from "next/link";
// import Popup from "./Popup";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import getSession, { destroySession } from "../../../lib/session";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import NavItem from "./NavItem";
import ResponsiveMenu from "./ResponsiveMenu";
import SessionUserInfo from "./SessionUserInfo";
import LocaleSwitcher from "./locale-switcher";

export default async function Nav({ lang }: { lang: Locale }) {
    const { navigation } = await getDictionary(lang)

    // const [toggle, setToggle] = useState(false);
    // const [showPopup, setShowPopup] = useState(false);
    // const navRef = useRef(null);

    // const open = () => {
    //     setToggle(!toggle);
    // };



    // const closePopupHandler = (e: any) => {
    //     setShowPopup(false);
    //     change(e);
    // };


    return (
        <div className="shadow-lg p-4 font-semibold">
            <div className="max-w-[1240px] flex justify-between py-[15px] mx-auto">
                <div className="text-2xl">My Logo</div>
                <ul className="hidden md:flex gap-6">
                    {menuItems.map((menuItem, index) => (
                        <NavItem
                            // id={index}
                            key={index}
                            {...menuItem}
                        />
                    ))}
                </ul>
                <div className="flex">
                    <SessionUserInfo />
                    <LocaleSwitcher />
                </div>
                <ResponsiveMenu menuItems={menuItems} />
            </div>
            {/* {showPopup && <Popup closePopupHandler={closePopupHandler} />} */}
        </div>
    );
}


const menuItems = [
    { text: "Home", href: "/", id: 0 },
    { text: "Docks Rentals", href: "/rentals", id: 1 },
    { text: "Moring Leasing", href: "/leases", id: 2 },
    { text: "Contact us", href: "/contact", id: 3 },
    { text: "About", href: "/about", id: 4 },
];

// export default dynamic(Promise.resolve(Nav), {ssr: false});
