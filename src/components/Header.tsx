// import { useState } from "react";
import Navbar from "./Navbar";

type HeaderProps = {
    logoName: string;
}

const navItems = [
    { label: "Home", path: "/" },
    { label: "I miei progetti", path: "/projects" },
    { label: "About", path: "/about" },
    { label: "Contatti", path: "/contacts" }
]

const Header = ({ logoName }: HeaderProps) => {

    // const [isOpen, setIsOpen] = useState(false);

    return (

        <header className="flex justify-between p-4">
            <h1 className="text-3xl font-bold">{logoName}</h1>
            <Navbar navItems={navItems} />
            <div>Dark Mode Toggle</div>
        </header>
    )
}

export default Header;