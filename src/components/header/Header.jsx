import { Link } from "react-router"
import { useEffect, useRef, useState } from "react"

function Header() {

    // To manage the dropdown
    const [visible, setVisible] = useState(false)
    const [height, setHeight] = useState("0px")
    const parentRef = useRef()
    const iconRef = useRef()

    // Toggle, when clicking on the chevron icon to open the dropdown
    const toggle = () => {
        //return !current
        setVisible(current => !current)
    }

    // Dropdown's height management for the open/close animation
    useEffect (() => {
        setHeight(visible ? "200px" : "0px")
    },[visible])

    // To close the dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if(e.target !== parentRef.current && e.target !== iconRef.current) {
                setVisible(false)
            }
        }
        
        window.addEventListener("click", handleClickOutside)

        return () => {
            window.removeEventListener("click", handleClickOutside)
        }   
    },[])
    
    return (
        <header className="bg-violet-200 ">
            <div className="px-5 xl:px-20 py-7 flex flex-col gap-2 sm:gap-6 sm:flex-row items-center justify-center sm:justify-between">
                
                <Link to="/">
                    <img 
                        src="assets/ProjetLogo.svg" 
                        className="w-24 md:w-48" 
                        alt="Logo du site. Le lien mène à la page d'accueil." 
                    />
                </Link>

                <nav className="flex gap-6 justify-center items-center text-base sm:text-xl uppercase">
                    <Link to="/">Accueil</Link>

                    <span className="h-4 sm:h-6 border-l-2 border-gray-500"></span>

                    {/* Projects' menu with dropdown */}
                    <div className="relative">
                        <div className="flex items-center">
                            <Link to="/projects">Projets</Link>
                            <svg 
                                id="dropdown-menu"
                                onClick={toggle}
                                aria-expanded={visible ? "true" : "false"}
                                ref={iconRef}
                                aria-haspopup="true" 
                                viewBox="0 0 20 20" 
                                fill="currentColor" 
                                aria-hidden="true" 
                                className={`-mr-1 size-5 sm:size-7 text-gray-500 cursor-pointer transition-transform duration-300 ease-in-out 
                                    ${visible ? "rotate-180" : ""}
                                `}
                            >
                                <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fillRule="evenodd" />
                            </svg>
                         </div>

                        {/* Dropdown, hidden by default */}
                            <div 
                                role="menu" 
                                ref={parentRef}
                                style={{maxHeight: height}}
                                tabIndex="-1" 
                                aria-labelledby="dropdown-menu" 
                                aria-orientation="vertical" 
                                className="absolute right-0 w-28 sm:w-36 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg focus:outline-hidden transition-all duration-500 ease-in-out overflow-hidden"
                            >
                                <div role="none" className="py-1 text-end">
                                    <Link 
                                        id="menu-item-0" 
                                        role="menuitem" 
                                        to="/projects/websites" 
                                        tabIndex="-1" 
                                        className="block px-4 py-2 text-base sm:text-xl text-gray-700"
                                        onClick={() => setVisible(false)}
                                    >
                                        Sites web
                                    </Link>
                                    <Link 
                                        id="menu-item-1" 
                                        role="menuitem" 
                                        to="/projects/videos" 
                                        tabIndex="-1" 
                                        className="block px-4 py-2 text-base sm:text-xl text-gray-700"
                                        onClick={() => setVisible(false)}
                                    >
                                        Vidéos
                                    </Link>
                                </div>
                            </div>

                    </div>
                    
                </nav>

            </div>
        </header>
    )
}

export default Header