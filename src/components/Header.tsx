type HeaderProps = {
    logoName: string;
}

const Header = ({ logoName }: HeaderProps) => {

    return (

        <header>
            <h1 className="text-3xl font-bold">{logoName}</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>I miei progetti</li>
                    <li>About</li>
                    <li>Contatti</li>
                </ul>
            </nav>
            <div>Dark Mode Toggle</div>
        </header>
    )
}

export default Header;