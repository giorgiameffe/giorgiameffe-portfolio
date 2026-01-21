import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {

    // Ottiene il percorso attuale (es. /home, /about)
    const { pathname } = useLocation();

    useEffect(() => {
        // Riporta lo scroll in cima alla pagina
        window.scrollTo(0, 0);
    }, [pathname]); // Si attiva ogni volta che il pathname cambia

    return null; // Questo componente non renderizza nulla graficamente
};

export default ScrollToTop;