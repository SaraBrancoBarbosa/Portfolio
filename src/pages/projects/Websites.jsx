import { useEffect } from "react"
import WebsitesContainer from "../../components/Containers/WebsitesContainer"
import ScrollToTop from "../../components/scrollToTop/ScrollToTop"

function Websites() {
  
  // To load at the top of the page after render
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="w-full flex flex-col gap-5 lg:gap-10">

      <ScrollToTop />
      
      <div className="mt-3 sm:mt-8">
        <h1 className="text-4xl md:text-5xl">Les sites et applications web</h1>
      </div>

        <WebsitesContainer
          background="/assets/projects/backgrounds/hrnetBg.webp"
          image="assets/projects/hrnetLogo.webp"
          title="HRnet"
          type="Réalisation d’un site web pour la société financière WealthHealth (entreprise fictive)"
          date="Avril – mai 2025"
          role="Développeuse web : passer une librairie jQuery vers React pour le site d’une entreprise"
          setting="Projet OpenClassrooms pour ma formation de Développeur d’application – JavaScript React"
          websiteLink="https://sarabrancobarbosa.github.io/HRnet/"
          codeLink="https://github.com/SaraBrancoBarbosa/HRnet"
          video={`https://youtu.be/W7qtqrIH2_I`}
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
          toolsLogo={[
            { name: "Node", src: "/assets/icons/tools/node.svg" },
            { name: "React", src: "/assets/icons/tools/react.svg" },
            { name: "Vite", src: "/assets/icons/tools/vite.svg" },
            { name: "Router", src: "/assets/icons/tools/router.svg" },
            { name: "Sass", src: "/assets/icons/tools/sass.svg" },
            { name: "Jest", src: "/assets/icons/tools/jest.svg" },
          ]}  
        />  
      
        <WebsitesContainer
          background="/assets/projects/backgrounds/argentBankBg.webp"
          image="assets/projects/argentBankLogo.webp"
          title="Argent Bank"
          type="Réalisation d’un site web pour la banque Argent Bank (entreprise fictive)"
          date="Mars – avril 2025"
          role="Développeuse web : utiliser une API pour un compte utilisateur bancaire avec React"
          setting="Projet OpenClassrooms pour ma formation de Développeur d’application – JavaScript React"
          codeLink="https://github.com/SaraBrancoBarbosa/Argent-Bank"
          video={`https://youtu.be/_WJxyiaoAgk`}
          requests=
            {`Intégrer le front-end avec le back-end via des appels API pour assurer une communication fluide entre le client et le serveur
            Utiliser React pour développer l’interface utilisateur de l’application bancaire`}
          tools=
            {`Node
            React (Vite)
            Router
            Sass
            Redux Toolkit
            MongoDB`}
          toolsLogo={[
            { name: "Node", src: "/assets/icons/tools/node.svg" },
            { name: "React", src: "/assets/icons/tools/react.svg" },
            { name: "Vite", src: "/assets/icons/tools/vite.svg" },
            { name: "Router", src: "/assets/icons/tools/router.svg" },
            { name: "Sass", src: "/assets/icons/tools/sass.svg" },
            { name: "Redux", src: "/assets/icons/tools/redux.svg" },
            { name: "MongoDB", src: "/assets/icons/tools/mongodb.svg" },
          ]}
        />  
      
        <WebsitesContainer
          background="/assets/projects/backgrounds/fannynjaBg.webp"
          image="assets/projects/fannynjaLogo.webp"
          title="Les personnages de Fanny"
          type={
            <>
              Réalisation d’un site web listant les personnages de l'artiste{" "}
              <a
                href="https://linktr.ee/fannydraw"
                target="_blank"
                className="underline"
              >
                Fannydraw
              </a>
            </>
          }
          date="Février 2025"
          role="Développeuse web : front-end, réalisation du fichier avec les données (json), illustrations pour certaines pages (réalisées au préalable)"
          setting="Projet personnel"
          websiteLink="https://sarabrancobarbosa.github.io/fannynjaCharacters/"
          codeLink="https://github.com/SaraBrancoBarbosa/fannynjaCharacters"
          video={`https://youtu.be/euO1Xf-448Q`}
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
          toolsLogo={[
            { name: "Node", src: "/assets/icons/tools/node.svg" },
            { name: "React", src: "/assets/icons/tools/react.svg" },
            { name: "Vite", src: "/assets/icons/tools/vite.svg" },
            { name: "Router", src: "/assets/icons/tools/router.svg" },
            { name: "Sass", src: "/assets/icons/tools/sass.svg" },
            { name: "PaintTool Sai 2", src: "/assets/icons/tools/sai.svg" },
          ]}
        />  

        <WebsitesContainer
          background="/assets/projects/backgrounds/roulcoolsBg.webp"
          image="assets/projects/roulcoolsLogo.webp"
          title="Association Roulcools Bike Elzange"
          type="Réalisation d’un site web et d'un forum pour le club de VTT pour enfants et adultes Roulcools Bike"
          date="Année universitaire 2022-2023"
          role="Développeuse et autres tâches (polyvalence en fonction des besoins)"
          setting="Projet tutoré de Master 2 Information-Communication AMINJ à Metz"
          websiteLink="https://www.les-roulcools.com/"
          forumLink="https://forum.les-roulcools.com/"
          video={`https://youtu.be/qT0Qya6H3TM`}
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
          toolsLogo={[
            { name: "Wordpress", src: "/assets/icons/tools/wordpress.svg" },
            { name: "phpBB", src: "/assets/icons/tools/phpbb.svg" },
            { name: "o2switch", src: "/assets/icons/tools/o2switch.svg" },
          ]}
        />
      
        <div className="mb-5 lg:mb-10">
          <WebsitesContainer
            background="/assets/projects/backgrounds/econceptBg.webp"
            image="assets/projects/econceptLogo.webp"
            title="E-Concept Applications"
            type="Refonte du site web de l'ntreprise de services informatiques pour particuliers et professionnels E-Concept Applications"
            date="Avril – Juin 2022"
            role="Développeuse web, graphiste, cheffe de projet. Projet réalisé seule, avec l’aide du tuteur de stage et directeur de l’entreprise, M. Martinet"
            setting="Stage de Master 1 Information-Communication AMINJ à Metz"
            websiteLink="https://e-concept-applications.fr/"
            video={`https://youtu.be/PgIl2gos5bs`}
            requests=
              {`Refonte du site web, responsive
              Graphisme (couleurs, mise en page, illustrations…)
              Arborescence réadaptée`}
            tools=
              {`Bootstrap
              Affinity Designer
              Hébergement chez l’entreprise`}
            toolsLogo={[
              { name: "Bootstrap", src: "/assets/icons/tools/bootstrap.svg" },
              { name: "Affinity Designer", src: "/assets/icons/tools/affinity.svg" },
            ]}
          />
        </div>
      </div>
  )
}

export default Websites