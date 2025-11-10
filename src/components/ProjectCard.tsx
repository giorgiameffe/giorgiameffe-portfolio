import { Link } from "react-router-dom";

type ProjectCardProps = {
    key: string;
    title: string;
    image: string;
    description: string;
    link: string;
}


const ProjectCard = ({ image, title, description, link }: ProjectCardProps) => {

    return (

        <article>
            <figure>
                <img src={image} alt={title} />
            </figure>

            <div>
                <h1>{title}</h1>
                <p>{description}</p>
                <Link to={link}>Scopri di più</Link>
            </div>
        </article>
    )

}

export default ProjectCard;