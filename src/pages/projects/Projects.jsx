import { Link } from "react-router"

function Projects() {
  return (
    <div className="flex flex-col gap-5 lg:gap-10 w-full">
      
      <div className="mt-3 sm:mt-9">
        <h1 className="text-4xl md:text-5xl">Mes projets</h1>
      </div>

      <div className="flex flex-col-reverse sm:grid sm:grid-cols-2 gap-10 p-5 sm:p-10 justify-center items-center rounded-2xl bg-violet-100 sm:min-h-104">
        <div className="flex flex-col items-center text-center gap-5 p-10 rounded-2xl bg-white">
          <p>Cette section regroupe une sélection de sites web que j'ai codés dans différents contextes (formations, stages, projets personnels...).</p>
          <p>Tous mes autres projets se trouvent dans <a href="https://github.com/SaraBrancoBarbosa" className="underline">ma page GitHub !</a></p>
          <Link to="/projects/websites">
            <button type="button" className="text-white rounded-2xl hover:scale-110 transition-transform duration-200">
              Accéder aux sites web
            </button>
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <img src="assets/projects/projectWebsites.webp" className="w-64 sm:w-120" alt="Image d'illustration pour la section sites web." />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 mb-5 lg:mb-10 gap-10 p-5 sm:p-10 justify-center items-center rounded-2xl bg-violet-100 sm:min-h-104">
        <div className="flex flex-col items-center">
          <img src="assets/projects/projectVideos.webp" className="w-64 sm:w-120" alt="Image d'illustration pour la section vidéos." />
        </div>

        <div className="flex flex-col items-center text-center gap-5 p-10 rounded-2xl bg-white">
          <p>Cette section regroupe les vidéos que j'ai montées pour mon Master Audiovisuel, Médias Interactifs Numériques et Jeux, et pour des projets personnels.</p>
          <Link to="/projects/videos">
            <button type="button" className="text-white rounded-2xl hover:scale-110 transition-transform duration-200">
              Accéder aux vidéos
            </button>
          </Link>
        </div>  
      </div>

    </div>
  )
}

export default Projects