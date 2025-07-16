import { Link, NavLink } from "react-router"

function Header() {

    // To underline the active NavLink depending of the current page
    //const location = useLocation()
    
    return (
        <header>
            <Link to="/">
                <img src="assets/logo.jpg" className="w-48 rounded-full" alt="Logo du site. Le lien mène à la page d'accueil." />
            </Link>

            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/projects">Projets</NavLink>
            </nav>
        </header>
    )
}

export default Header