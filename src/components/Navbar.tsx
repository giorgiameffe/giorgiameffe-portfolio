import { NavLink } from "react-router-dom";

export type NavItem = {
    label: string;
    path: string;
};

type NavbarProps = {
    navItems: NavItem[];
    onClick?: () => void;
    className?: string;
};

const Navbar = ({ navItems, onClick }: NavbarProps) => {

    return (

        <nav>
            <ul className={`flex flex-col items-center md:flex-row gap-4 md:gap-6`}>
                {navItems.map((item) => (
                    <li key={item.path}>
                        <NavLink
                            to={item.path}
                            onClick={onClick}
                            className={({ isActive }) =>
                                isActive
                                    ? "inline-block text-gray-1000 dark:text-white font-semibold"
                                    : "inline-block text-gray-800 dark:text-white transition-transform duration-200 ease-out hover:scale-110"
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