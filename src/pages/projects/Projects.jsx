import { Link } from "react-router"

function Projects() {
  return (
    <div className="w-full">
      
      <div className="bg-blue-500">
        <h1>Mes projets</h1>

        <h2>Cette section regroupe les informations sur mes projets.</h2>
      </div>

      <div className="flex flex-col-reverse sm:grid sm:grid-cols-2 gap-10 p-10 justify-center items-center bg-blue-200">
        <div className="flex flex-col items-center text-center gap-5">
          <p>Cette section regroupe une sélection de sites web que j'ai codé dans différents contextes (formations, stages, projets personnels...).</p>
          <p>Tous mes autres projets se trouvent dans <a href="https://github.com/SaraBrancoBarbosa" className="underline">ma page GitHub !</a></p>
          <Link to="/projects/websites">
            <button type="button" className="text-white rounded-2xl hover:scale-110 transition-transform duration-200">
              Accéder aux sites web
            </button>
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <img src="assets/projects/projectWebsites.png" className="w-64 sm:w-120" alt="Image d'illustration pour la section sites web." />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-10 justify-center items-center bg-green-300">
        <div className="flex flex-col items-center">
          <img src="assets/projects/projectVideos.png" className="w-64 sm:w-120" alt="Image d'illustration pour la section vidéos." />
        </div>

        <div className="flex flex-col items-center text-center gap-5">
          <p>Cette section regroupe les vidéos que j'ai monté pour mon Master Audiovisuel, Médias Interactifs Numériques et Jeux, et pour des projets personnels.</p>
          <p>Tous mes projets se trouvent dans <a href="https://www.youtube.com/@SaraBrancoBarbosa" className="underline">ma page YouTube !</a></p>
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