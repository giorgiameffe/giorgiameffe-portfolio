type HeroSectionProps = {
    title: string;
    subtitle: string;
    description: string;
    imageUrl?: string;
}



const HeroSection = ({ title, subtitle, description }: HeroSectionProps) => {

    return (

        <section className="bg-gradient-to-br from-[#80d0ff] via-[#c8a8ff] to-[#ffb5a7] min-h-[100vh] flex items-center justify-center px-6 py-16">
            <div className="text-center">
                <h1 className="text-5xl font-bold">{title}</h1>
                <h2 className="mt-2 text-xl">{subtitle}</h2>
                <p className="mt-2">{description}</p>
                <button className="mt-4 bg-rose-400 text-white px-6 py-2 rounded-3xl shadow-md transition">Vedi il mio portfolio</button>
            </div>
        </section>
    )
}

export default HeroSection;