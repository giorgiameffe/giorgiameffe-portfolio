import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {

    return (

        <footer className="w-full py-7 text-center mt-10 shadow-inner shadow-gray-300 dark:shadow-gray-900">

            {/* Social Icons */}
            <div className="flex justify-center gap-6">
                <Link
                    to="https://www.linkedin.com/in/giorgia-meffe-41b23b389"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-700 dark:text-gray-300 text-rose-400 hover:text-rose-500 transition"
                >
                    <FaLinkedin className="text-2xl" />

                </Link>

                <Link
                    to="https://github.com/giorgiameffe"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-700 dark:text-gray-300 text-rose-400 hover:text-rose-500 transition"
                >
                    <FaGithub className="text-2xl" />

                </Link>

                <Link
                    to="/"
                    className="text-gray-700 dark:text-gray-300 text-rose-400 hover:text-rose-500 transition"
                >
                    <FaEnvelope className="text-2xl" />
                </Link>
            </div>

            {/* Frase */}
            <p className="text-lg text-gray-700 dark:text-gray-500 mt-4">
                Designed and Developed with <FaHeart className="inline text-md text-rose-500" />
            </p>

            {/* Copyright */}
            <p className="text-md text-gray-600 dark:text-gray-600 mt-2">
                © {new Date().getFullYear()} • Giorgia Meffe
            </p>
        </footer>
    );
};

export default Footer;