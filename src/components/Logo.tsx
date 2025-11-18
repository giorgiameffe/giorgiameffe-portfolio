import React from "react";
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {

    const { isDark } = useContext(GlobalContext);

    return (
        <div className="flex flex-col items-center w-full">
            <Link to="/">
                <img
                    src={isDark ? "/img/logo-dark.png" : "/img/logo-light.png"}
                    alt="Logo"
                    className="w-22 h-auto"
                />
            </Link>
        </div>
    );
};

export default Logo;
