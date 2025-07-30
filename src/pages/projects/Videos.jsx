import { useEffect } from "react"
import { Link } from "react-router"
import ScrollToTop from "../../components/scrollToTop/ScrollToTop"

function Videos() {
  
  // To load at the top of the page after render
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="w-full">

      <ScrollToTop />
      
      <div className="bg-blue-500">
        <h1>Les montages de vidéos</h1>

        <p>Cette section regroupe plusieurs de mes projets.</p>
      </div>

      <div className="bg-red-200">
        <h2>Exemple 1</h2>
        <p>Blablabla</p>
        <Link>Lien pour accéder à la vidéo</Link>
      </div>

      <div className="bg-green-300">
        <h2>Exemple 2</h2>
        <p>Blablabla</p>
        <Link>Lien pour accéder à la vidéo</Link>
      </div>

    </div>
  )
}

export default Videos