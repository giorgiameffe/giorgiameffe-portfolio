import React from "react";

interface ProjectDetailHeroProps {
    title: string;
    briefDescription: string;
    heroImage: string;
}

const ProjectDetailHero: React.FC<ProjectDetailHeroProps> = ({
    title,
    briefDescription,
    heroImage,
}) => {

    return (

        <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-gray-200 mb-6">
                {title}
            </h1>

            <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed 
                pt-4 pb-6 px-4 mb-2 md:mb-4 max-w-3xl">
                {briefDescription}
            </p>

            <img
                src={heroImage}
                alt={title}
            />
        </div>
    );
};

export default ProjectDetailHero;