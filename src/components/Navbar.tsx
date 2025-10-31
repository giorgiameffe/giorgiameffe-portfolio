import { NavLink } from "react-router-dom";

export type NavItem = {
    label: string;
    path: string;
};

type NavbarProps = {
    navItems: NavItem[];
    onToggle?: () => void;
    className?: string;
};

const Navbar = ({ navItems, onToggle, className = "" }: NavbarProps) => {
    return (
        <nav>
            <ul className={`flex flex-col md:flex-row gap-4 md:gap-6 ${className}`}>
                {navItems.map((item) => (
                    <li key={item.path}>
                        <NavLink
                            to={item.path}
                            onClick={onToggle}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-gray-1000 font-semibold"
                                    : "text-gray-800 hover:text-pink-500 transition"
                            }
                        >
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;