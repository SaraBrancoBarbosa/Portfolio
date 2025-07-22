import { Link } from "react-router"

function Projects() {
  return (
    <div className="w-full">
      
      <div className="bg-blue-500">
        <h1>Mes projets</h1>

        <p>Cette section regroupe les informations sur mes projets.</p>
      </div>

      <div className="bg-red-200">
        <h2>Les sites et applications web</h2>
        <p>Blablabla</p>
        <Link>Lien pour accéder à la page</Link>
      </div>

      <div className="bg-green-300">
        <h2>Les montages vidéo</h2>
        <p>Blablabla</p>
        <Link>Lien pour accéder à la page</Link>
      </div>

    </div>
  )
}

export default Projects