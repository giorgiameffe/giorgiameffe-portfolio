import React from "react";
import { FaEnvelope, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import SocialIcons from "./SocialIcons";

const Footer: React.FC = () => {

    return (

        <footer className="w-full py-7 text-center shadow-inner shadow-gray-300 dark:shadow-gray-900">

            {/* Social Icons */}
            <div className="flex justify-center gap-6">

                <SocialIcons />

                <Link
                    to="/"
                    className="text-gray-900 dark:text-gray-100 hover:text-rose-400 transition"
                >
                    <FaEnvelope className="text-2xl" />
                </Link>
            </div>

            {/* Frase */}
            <p className="text-lg text-gray-800 dark:text-gray-300 mt-4 flex justify-center items-center gap-1">
                Designed and Developed with
                <FaHeart className="text-md text-rose-400 dark:text-rose-500" />
            </p>


            {/* Copyright */}
            <p className="text-md text-gray-700 dark:text-gray-500 mt-2">
                © {new Date().getFullYear()} • Giorgia Meffe
            </p>
        </footer>
    );
};

export default Footer;