import { Link } from "react-router"
import { useState } from "react"

function Header() {

    // To underline the active NavLink depending of the current page
    //const location = useLocation()

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    // To manage the projects' dropdown
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }
    
    return (
        <header className="bg-violet-100">
            <div className="p-4 flex flex-col gap-2 sm:gap-6 sm:flex-row items-center justify-center sm:justify-between">
                
                <Link to="/">
                    <img src="assets/logo.jpg" className="w-24 sm:w-48 rounded-full" alt="Logo du site. Le lien mène à la page d'accueil." />
                </Link>

                <nav className="flex gap-6 justify-center text-sm sm:text-xl uppercase">
                    <Link to="/">Accueil</Link>

                    {/* Projects' menu with dropdown */}
                    <div className="relative">
                        <div className="flex items-center">
                            <Link to="/projects" >
                                Projets
                            </Link>
                            <svg 
                                id="menu-button"
                                onClick={toggleDropdown}
                                aria-expanded={isDropdownOpen ? "true" : "false"}
                                aria-haspopup="true" 
                                viewBox="0 0 20 20" 
                                fill="currentColor" 
                                data-slot="icon" 
                                aria-hidden="true" 
                                className="-mr-1 size-5 sm:size-7 text-gray-400 cursor-pointer"
                            >
                                <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fillRule="evenodd" />
                            </svg>
                         </div>

                        {/* Dropdown, hidden by default */}
                        <div 
                            role="menu" 
                            tabIndex="-1" 
                            aria-labelledby="menu-button" 
                            aria-orientation="vertical" 
                            className={`absolute right-0 w-28 sm:w-36 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden ${isDropdownOpen ? "block" : "hidden"}`}
                        >
                            <div role="none" className="py-1 text-end">
                                <Link id="menu-item-0" role="menuitem" href="#" tabIndex="-1" className="block px-4 py-2 text-sm sm:text-xl text-gray-700">Sites web</Link>
                                <Link id="menu-item-1" role="menuitem" href="#" tabIndex="-1" className="block px-4 py-2 text-sm sm:text-xl text-gray-700">Vidéos</Link>
                            </div>
                        </div>
                    </div>
                    
                </nav>

            </div>
        </header>
    )
}

export default Header