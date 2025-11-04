import { useState } from "react";
import Navbar from "./Navbar";

type HeaderProps = {
    logoName: string;
};

const navItems = [
    { label: "Home", path: "/" },
    { label: "I miei progetti", path: "/projects" },
    { label: "About", path: "/about" },
    { label: "Contatti", path: "/contacts" },
];

const Header = ({ logoName }: HeaderProps) => {

    const [isOpen, setIsOpen] = useState(false);

    function handleToggle() {
        setIsOpen((prev) => !prev);
    }

    return (

        <header className="flex items-center justify-between p-6 bg-white relative">

            {/* SEZIONE SINISTRA: Hamburger + Logo */}
            <div className="flex items-center gap-3">

                {/* Hamburger menu (solo su mobile) */}
                <button
                    onClick={handleToggle}
                    aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
                    className="text-2xl md:hidden focus:outline-none"
                >
                    {isOpen ? "✕" : "☰"}
                </button>

                {/* Logo */}
                <h1 className="text-2xl font-bold">
                    {logoName}
                </h1>
            </div>

            {/* NAVBAR visibile per tablet e desktop*/}
            <div className="hidden md:flex">
                <Navbar navItems={navItems} />
            </div>

            {/* SEZIONE DESTRA: Dark Mode Toggle */}
            <button className="cursor-pointer" aria-label="Dark Mode Toggle">
                Toggle
            </button>

            {/* MENU MOBILE OVERLAY */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 gap-4 py-6 shadow-md md:hidden">
                    <Navbar navItems={navItems} onClick={handleToggle} />
                </div>
            )}
        </header >
    );
};

export default Header;