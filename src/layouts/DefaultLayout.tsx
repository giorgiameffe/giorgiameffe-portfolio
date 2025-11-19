import { useContext, useEffect } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import GlobalContext from "../contexts/GlobalContext";
import Footer from "../components/Footer";

const DefaultLayout: React.FC = () => {

    const { isDark, setIsDark } = useContext(GlobalContext);

    const toggleTheme = () => {
        setIsDark(prev => !prev);
    }

    useEffect(() => {
        const root = document.documentElement;

        root.classList.remove('light', 'dark');
        root.classList.add(isDark ? 'dark' : 'light');

        localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    return (

        <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
            <Header currentTheme={isDark ? "dark" : "light"} onToggleTheme={toggleTheme} />
            <main className="pb-2">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default DefaultLayout;