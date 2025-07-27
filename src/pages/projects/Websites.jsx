import { Link } from "react-router"
import WebsitesContainer from "../../components/Containers/WebsitesContainer"

function Websites() {
  return (
    <div className="w-full">
      
      <div className="bg-blue-500">
        <h1>Les sites et applications web</h1>

        <p>Cette section regroupe plusieurs de mes projets.</p>
      </div>

      <section className="bg-red-200">
        <WebsitesContainer
          image="assets/projects/hrnetLogo.png"
          title="HRnet"
          type="Réalisation d’un site web pour une entreprise fictive"
          date="Avril – mai 2025"
          role="Développeuse web : passer une librairie jQuery vers React pour le site d’une entreprise"
          setting="Projet OpenClassrooms pour ma formation de Développeur d’application – JavaScript React"
          link={`https://github.com/SaraBrancoBarbosa/HRnet
                https://sarabrancobarbosa.github.io/HRnet/`}
          video={`https://youtu.be/W7qtqrIH2_I`}
          client="Grande société financière WealthHealth (fictive)"
          requests=
            {`Refondre l’application en passant de jQuery à React pour réduire la dette technique
            Remplacer un plugin jQuery spécifique par un composant React (composant choisi : une table avec tri, filtre et pagination)
            Rédiger des documents techniques détaillant l’architecture du composant, son fonctionnement, et les raisons de sa conception
            Mesurer les performances de l’application avant et après la conversion
            Réaliser des tests du code React`}
          tools=
            {`Node
            React (Vite)
            Router
            Sass
            Jest`}
        />  
      </section>

      <section className="bg-green-300">
        <WebsitesContainer
          image="assets/projects/argentBankLogo.png"
          title="Argent Bank"
          type="Réalisation d’un site web pour une entreprise fictive"
          date="Mars – avril 2025"
          role="Développeuse web : utiliser une API pour un compte utilisateur bancaire avec React"
          setting="Projet OpenClassrooms pour ma formation de Développeur d’application – JavaScript React"
          link={`https://github.com/SaraBrancoBarbosa/Argent-Bank`}
          video={`https://youtu.be/_WJxyiaoAgk`}
          client="Entreprise bancaire Argent Bank (fictive)"
          requests=
            {`Intégrer le front-end avec le back-end via des appels API pour assurer une communication fluide entre le client et le serveur
            Utiliser React pour développer l’interface utilisateur de l’application bancaire`}
          tools=
            {`Node
            React (Vite)
            Router
            Sass
            Redux Toolkit
            MongDB`}
        />  
      </section>

    </div>
  )
}

export default Websites