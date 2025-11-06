import { useState, useEffect } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

type Theme = 'light' | 'dark';

const DefaultLayout: React.FC = () => {

    const [theme, setTheme] = useState<Theme>(() => {
        // Recupera il tema salvato nel localStorage (se esiste)
        const savedTheme = localStorage.getItem('theme') as Theme;

        // Se il valore salvato è valido, lo usa. Altrimenti imposta "light" come default.
        return (savedTheme === 'light' || savedTheme === 'dark') ? savedTheme : 'light';
    });

    const toggleTheme = () => {

        // Cambia tema invertendolo: se è "dark" lo mette "light", altrimenti "dark"
        setTheme(theme => theme === 'dark' ? 'light' : 'dark');
    }

    useEffect(() => {

        const root = document.documentElement;

        // Rimuove eventuali classi di tema già presenti
        root.classList.remove('light', 'dark');

        // Aggiunge la classe corrispondente al tema attuale
        root.classList.add(theme);

        // Salva il nuovo tema nel localStorage per ricordarlo nei prossimi accessi
        localStorage.setItem('theme', theme);

    }, [theme]); // L'effetto si attiva ogni volta che "theme" cambia

    return (

        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
            <Header currentTheme={theme} onToggleTheme={toggleTheme} />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default DefaultLayout;