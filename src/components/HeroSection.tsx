type HeroSectionProps = {
    title: string;
    subtitle: string;
    description: string;
    imageUrl?: string;
};

const HeroSection = ({ title, subtitle, description }: HeroSectionProps) => {
    return (
        <section className="bg-gradient-to-br from-[#80d0ff] via-[#c8a8ff] to-[#ffb5a7] min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-16 text-center md:text-left">

            {/* Immagine */}
            <figure className="lg:mr-10 flex justify-center md:justify-end">
                <img
                    src="/img/giorgia-img.png"
                    alt="Foto personale di Giorgia"
                    className="w-64 md:w-100 lg:w-80 h-auto object-contain rounded-3"
                />
            </figure>

            {/* Testo */}
            <div className="max-w-md">
                <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold">{title}</h1>
                <h2 className="mt-3 text-xl md:text-lg lg:text-xl">{subtitle}</h2>
                <p className="mt-2 text-base md:text-sm lg:text-base">{description}</p>
                <button className="mt-4 bg-rose-400 text-white px-6 py-2 rounded-3xl shadow-md transition cursor-pointer">
                    Scopri di più su di me
                </button>
            </div>
        </section>
    );
};

export default HeroSection;