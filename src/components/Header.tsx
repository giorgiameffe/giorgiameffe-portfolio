import { useState } from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import { FaSun, FaMoon } from "react-icons/fa";

type HeaderProps = {
    currentTheme: 'light' | 'dark';
    onToggleTheme: () => void;
}

const navItems = [
    { label: "Home", path: "/" },
    { label: "I miei progetti", path: "/projects" },
    { label: "About", path: "/about" },
    { label: "Contatti", path: "/contacts" },
];

const Header = ({ currentTheme, onToggleTheme }: HeaderProps) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen(prev => !prev);

    return (

        <header
            className="flex items-center justify-between p-3 bg-gray-100/70 dark:bg-black/70 text-gray-900 dark:text-white 
            shadow-sm dark:shadow-gray-900 backdrop-blur-md transition-all duration-300 fixed top-0 left-0 w-full z-20"
        >

            {/* SEZIONE SINISTRA */}
            <div className="flex items-center gap-3">
                <button
                    onClick={handleToggle}
                    aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
                    className="text-2xl md:hidden focus:outline-hidden text-gray-900 dark:text-white"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
                <Logo />
            </div>

            {/* Navbar desktop */}
            <div className="hidden md:flex">
                <Navbar navItems={navItems} />
            </div>

            {/* Toggle Dark Mode */}
            <button
                onClick={onToggleTheme}
                className="cursor-pointer text-xl p-2 rounded-full transition-colors duration-300"
                aria-label="Dark Mode Toggle"
            >
                {currentTheme === 'dark'
                    ? <FaSun className="text-white" />
                    : <FaMoon className="text-black" />}
            </button>

            {/* Menu mobile */}
            {isOpen && (
                <div className="absolute top-18 left-0 w-full bg-gray-100 dark:bg-black gap-4 py-6 shadow-md md:hidden z-20
                backdrop-blur-md">
                    <Navbar navItems={navItems} onClick={handleToggle} />
                </div>
            )}
        </header>
    );
};

export default Header;