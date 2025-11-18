import { useState } from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";
import { Sun, Moon } from "lucide-react";
import { Menu, X } from "lucide-react";

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

    const handleToggle = () => {

        setIsOpen(prev => !prev);
    }

    return (

        <header className="flex items-center justify-between p-3 bg-gray-100 dark:bg-black text-gray-900 dark:text-white 
        shadow-sm dark:shadow-gray-900 transition-colors duration-300">

            {/* SEZIONE SINISTRA: Hamburger + Logo */}
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

            {/* SEZIONE DESTRA: Toggle Dark Mode */}
            <button
                onClick={onToggleTheme}
                className="cursor-pointer text-xl p-2 rounded-full transition-colors duration-300 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-yellow-400"
                aria-label="Dark Mode Toggle"
            >
                {currentTheme === 'dark' ? <Sun className="text-white" /> : <Moon className="text-black" />}
            </button>

            {/* Menu mobile overlay */}
            {isOpen && (
                <div className="absolute top-18 left-0 w-full bg-gray-100 dark:bg-black gap-4 py-6 shadow-md md:hidden z-20">
                    <Navbar navItems={navItems} onClick={handleToggle} />
                </div>
            )}
        </header>
    );
};

export default Header;