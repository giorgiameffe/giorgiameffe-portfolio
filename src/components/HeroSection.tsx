type HeroSectionProps = {
    title: string;
    subtitle: string;
    description: string;
    imageUrl?: string;
}



const HeroSection = ({ title, subtitle, description }: HeroSectionProps) => {

    return (

        <section>
            <div>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <p>{description}</p>
                <button>Vedi il mio portfolio</button>
            </div>
            <figure>
            </figure>
        </section>
    )
}

export default HeroSection;