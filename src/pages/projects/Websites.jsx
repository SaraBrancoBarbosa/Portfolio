import { Link } from "react-router"

function Websites() {
  return (
    <div className="w-full">
      
      <div className="bg-blue-500">
        <h1>Les sites et applications web</h1>

        <p>Cette section regroupe plusieurs de mes projets.</p>
      </div>

      <div className="bg-red-200">
        <h2>Exemple 1</h2>
        <p>Blablabla</p>
        <Link>Lien pour accéder au site</Link>
        <Link>Lien pour accéder au code</Link>
        <Link>Lien pour accéder à la vidéo de navigation du site</Link>
      </div>

      <div className="bg-green-300">
        <h2>Exemple 2</h2>
        <p>Blablabla</p>
        <Link>Lien pour accéder au site</Link>
        <Link>Lien pour accéder au code</Link>
        <Link>Lien pour accéder à la vidéo de navigation du site</Link>
      </div>

    </div>
  )
}

export default Websites