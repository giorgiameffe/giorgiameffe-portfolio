import { NavLink } from "react-router-dom";

type HeaderProps = {
    logoName: string;
}

const Header = ({ logoName }: HeaderProps) => {

    const navItems = [
        { label: "Home", path: "/" },
        { label: "I miei progetti", path: "/projects" },
        { label: "About", path: "/about" },
        { label: "Contatti", path: "/contacts" }
    ]

    return (

        <header>
            <h1 className="text-3xl font-bold">{logoName}</h1>
            <nav>
                <ul>
                    {navItems.map(({ label, path }) => (
                        <li key={path}>
                            <NavLink to={path}>
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <div>Dark Mode Toggle</div>
        </header>
    )
}

export default Header;