import { Link } from "react-router"

function Homepage() {
  return (
    <div className="w-full flex flex-col gap-5 lg:gap-10">
    
      <div className="mt-3 sm:mt-9">
        <h1 className="text-4xl md:text-5xl">Bienvenue sur mon portfolio !</h1>
      </div>

      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-5 p-3 lg:p-10 justify-center items-center rounded-2xl bg-violet-100 lg:min-h-104">
        <div className="flex flex-col items-center text-center gap-5 p-3 lg:p-10 rounded-2xl bg-white">
          <h2 className="text-2xl lg:text-3xl text-violet-700">Je suis Sara Barbosa, une passionnée de langues et d’informatique.</h2>

          <p>Après avoir étudié les langues au <span className="font-bold">Master Langues et Sociétés</span> (parcours Plurilinguisme et Interculturalité) à l’Université de Strasbourg, 
            puis l’information-communication au <span className="font-bold">Master Audiovisuel, Médias Interactifs Numériques et Jeux</span> (parcours Création de Projets Numériques) à l’Université de Metz, 
            j’ai souhaité me concentrer sur <span className="font-bold">le développement web front-end</span>.
          </p>
        
          <p><span className="font-bold">Les langues et la communication</span> m’intéressent toujours autant, mais les différents projets et stages que j’ai pu réaliser ont confirmé mon attrait pour le code !</p>
        </div>

        <div className="flex flex-col items-center">
          <img src="assets/logo.webp" className="w-52 sm:w-80 rounded-full" alt="Logo du site. Le lien mène à la page d'accueil." />
        </div>
      </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 flex-row justify-between items-center">
          <div className="flex flex-col items-center text-center justify-center gap-5 p-3 lg:p-10 rounded-2xl h-full bg-violet-100">
            <p className="p-10 rounded-2xl bg-white min-h-[182px] block content-center">          
              Lors de la conception d'un projet web, <span className="font-bold">la communication avec le commanditaire et les utilisateurs</span> m'est prioritaire et fait partie intégrante du code.
              J'aime me focaliser sur <span className="font-bold">l'expérience utilisateur</span> et réfléchir à la meilleure solution pour rendre la navigation du site la plus agréable possible tout en répondant au besoin initial.               
            </p>

            <img src="assets/Code.png" className="w-64 sm:w-88" alt="Logos de plusieurs outils servant au développement web." />
          </div>

          <div className="flex flex-col items-center text-center justify-center gap-10 p-3 lg:p-10 rounded-2xl h-full bg-violet-100">
            <p className="p-10 rounded-2xl bg-white min-h-[182px] block content-center">          
              J'affectionne aussi tout particulièrement <span className="font-bold">la création de contenu artistique</span>. 
              Lorsque le projet le permet, j'aime proposer des <span className="font-bold">illustrations</span> ! Je dessine régulièrement lors de mon temps libre.
              Je me remets également au <span className="font-bold">montage vidéo</span> et je serais ravie d'en réaliser d'autres à l'avenir.
            </p>

            <img src="assets/Creations.png" className="w-60 sm:w-80" alt="Logos de plusieurs outils servant à la création de contenu." />
          </div>
        </div>

      <div className="flex flex-col gap-5 p-3 lg:p-10 justify-center items-center rounded-2xl bg-violet-100 mb-5 lg:mb-10">
        <div className="flex flex-col items-center text-center gap-5 p-3 lg:p-10 rounded-2xl bg-white">
          <p>Je propose donc dans ce portfolio <span className="font-bold">une sélection de projets</span> qui dépeignent selon moi l'ensemble de mes compétences.</p>
          <p>J'y présente des réalisations produites dans le cadre de mes études, de mes stages, ou d'envies plus personnelles !</p>
          <Link to="/projects">
              <button type="button" className="text-white rounded-2xl hover:scale-110 transition-transform duration-200">
                Cliquez ici pour les découvrir !
              </button>
            </Link>
        </div>
      </div>

    </div>
  )
}

export default Homepage