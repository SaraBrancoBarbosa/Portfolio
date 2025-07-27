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
          websiteLink="https://github.com/SaraBrancoBarbosa/HRnet"
          codeLink="https://sarabrancobarbosa.github.io/HRnet/"
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
          codeLink="https://github.com/SaraBrancoBarbosa/Argent-Bank"
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

      <section className="bg-red-200">
        <WebsitesContainer
          image="assets/projects/fannynjaLogo.png"
          title="Les personnages de Fannynja"
          type="Réalisation d’un site web pour une amie"
          date="Février 2025"
          role="Développeuse web : front-end, réalisation du fichier avec les données (json), illustrations pour certaines pages (réalisées au préalable)"
          setting="Projet personnel"
          websiteLink="https://sarabrancobarbosa.github.io/fannynjaCharacters/"
          codeLink="https://github.com/SaraBrancoBarbosa/fannynjaCharacters"
          video={`https://youtu.be/euO1Xf-448Q`}
          client="Artiste Fannydraw"
          requests=
            {`Site web responsive qui s’adapte à tous les écrans
            Animations courtes et fluides pour ajouter du dynamisme, pour communiquer avec l’utilisateur (icône de chargement, flèches pour indiquer ludiquement la suite de la navigation…) et pour rappeler l’univers de l’artiste
            Fiches de présentation des personnages : textes, illustrations (de haute qualité pour servir de banque d’images)
            Composants réutilisables pour pouvoir ajouter de nouveaux personnages aisément ou pour pouvoir modifier leur fiche
            Création de certaines illustrations`}
          tools=
            {`Node
            React (Vite)
            Router
            Sass
            PaintTool Sai 2 (illustrations)`}
        />  
      </section>

      <section className="bg-green-300">
        <WebsitesContainer
          image="assets/projects/roulcoolsLogo.png"
          title="Association Roulcools Bike Elzange"
          type="Réalisation d’un site web et d'un forum"
          date="Année universitaire 2022-2023"
          role="Développeuse et autres tâches (polyvalence en fonction des besoins)"
          setting="Projet tutoré de Master 2 Information-Communication AMINJ à Metz"
          websiteLink="https://www.les-roulcools.com/"
          forumLink="https://forum.les-roulcools.com/"
          video={`https://youtu.be/qT0Qya6H3TM`}
          client="Club de VTT pour enfants et adultes"
          requests=
            {`Intégration d’un forum pour annoncer les événements et entraînements, et pour dialoguer avec les adhérents
            Formulaire de contact
            Calendrier sous forme d’agenda
            Site et forum ludiques, tout en restant professionnels (demande de subventions…)
            Interface unique, responsive
            Facile à prendre en main, avec documents explicatifs lors de la livraison`}
          tools=
            {`Wordpress
            phpBB
            o2switch (hébergement)`}
        />  
      </section>

      <section className="bg-red-200">
        <WebsitesContainer
          image="assets/projects/econceptLogo.png"
          title="E-Concept Applications"
          type="Refonte du site web"
          date="Avril – Juin 2022"
          role="Développeuse web, graphiste, cheffe de projet. Projet réalisé seule, avec l’aide du tuteur de stage et directeur de l’entreprise, M. Martinet"
          setting="Stage de Master 1 Information-Communication AMINJ à Metz"
          websiteLink="https://e-concept-applications.fr/"
          video={`https://youtu.be/PgIl2gos5bs`}
          client="Entreprise de services informatiques pour particuliers et professionnels"
          requests=
            {`Refonte du site web, responsive
            Graphisme (couleurs, mise en page, illustrations…)
            Arborescence réadaptée`}
          tools=
            {`Bootstrap
            PhpStorm
            Affinity Designer
            Hébergement chez l’entreprise`}
        />  
      </section>

    </div>
  )
}

export default Websites