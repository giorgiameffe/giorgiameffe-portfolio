import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const SocialIcons: React.FC = () => {

    return (

        <>
            <Link
                to="https://www.linkedin.com/in/giorgia-meffe-41b23b389"
                target="_blank"
                rel="noreferrer"
                className="text-gray-900 dark:text-gray-100 hover:text-rose-500 transition-colors duration-700 ease-out"
            >
                <FaLinkedin className="text-2xl" />

            </Link>

            <Link
                to="https://github.com/giorgiameffe"
                target="_blank"
                rel="noreferrer"
                className="text-gray-900 dark:text-gray-100 hover:text-rose-500 transition-colors duration-700 ease-out"
            >
                <FaGithub className="text-2xl" />

            </Link>
        </>
    )

}

export default SocialIcons;