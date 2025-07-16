import { Link } from "react-router"

const logoLinkedIn = "assets/icons/logo-linkedin.svg"
const logoYoutube = "assets/icons/logo-youtube.svg"
const logoGitHub = "assets/icons/logo-github.svg"
const logoMail = "assets/icons/logo-mail.svg"

function Footer() {
    return (
        <footer>
            <div>
                <Link to="https://www.linkedin.com/in/sara-barbosa-ba0157207/">
                    <img src={logoLinkedIn} className="w-14" alt="Lien vers le compte LinkedIn" />
                </Link>

                <Link to="https://www.linkedin.com/in/sara-barbosa-ba0157207/">
                    <img src={logoGitHub} className="w-14" alt="Lien vers le compte GitHub" />
                </Link>

                <Link to="https://www.youtube.com/@SaraBrancoBarbosa">
                    <img src={logoYoutube} className="w-14" alt="Lien vers le compte YouTube" />
                </Link>

                <Link to="mailto:sara.barbosa@hotmail.fr">
                    <img src={logoMail} className="w-14" alt="Lien pour m'envoyer un mail" />
                </Link>
            </div>

            <p>© 2025 par Sara Barbosa</p>
        </footer>
    )
}

export default Footer