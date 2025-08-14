import { useEffect } from "react"
import ScrollToTop from "../../components/scrollToTop/ScrollToTop"
import VideosContainer from "../../components/Containers/VideosContainer"

function Videos() {
  
  // To load at the top of the page after render
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="w-full flex flex-col gap-5 lg:gap-10">

      <ScrollToTop />

      <div className="mt-3 lg:mt-9">
        <h1 className="text-4xl md:text-5xl">Les montages vidéos</h1>
      </div>

      <VideosContainer
        background="#fee2e2"
        video={`/assets/videos/SetMeFree.mp4`}
        thumbnail="assets/videos/SetMeFreeThumbnail.jpg"
        youtubeLink={`https://youtu.be/DE2VneeHYYY?si=T62lsHc-3iApYgsg`}
        type="Vidéo promotionnelle d’une application mobile (fictive)"
        setting="Cours de Master 2 AMINJ (2022), création d’une application mobile et gestion de projet. Travail en binôme (avec Adrien Cauchy)"
        tools=
          {`Canva`}
        toolsLogo={[
          { name: "Canva", src: "/assets/icons/tools/canva.svg" },
        ]}
        presentation="Cette vidéo accompagne tout un projet d’invention d’une application mobile : sa création, son interface graphique, la définition des fonctionnalités, sa mise en ligne... La vidéo joue sur l'ironie, avec une musique pleine d'espoir pour une situation en réalité assez cocasse."
      />

      <VideosContainer
        background="#cffafe"
        video={`/assets/videos/Mouche.mp4`}
        thumbnail="assets/videos/MoucheThumbnail.jpg"
        youtubeLink={`https://youtube.com/shorts/7K1SozXF3QU?si=30UnH31Mv_3o7e_j`}
        type="Animation en boucle"
        setting="Cours de Master 2 AMINJ (2023), initiation à la suite Adobe"
        tools=
          {`Adobe Illustrator
          Adobe Animate
          Adobe Première Pro`}
        toolsLogo={[
          { name: "Adobe Illustrator", src: "/assets/icons/tools/adobe-illustrator.svg" },
          { name: "Adobe Animate", src: "/assets/icons/tools/adobe-animate.svg" },
          { name: "Adobe Première Pro", src: "/assets/icons/tools/adobe-premiere.svg" },
        ]}
        presentation="Vidéo humoristique avec plusieurs éléments : changements de scènes, animation « loop », déplacements du personnage…"
      /> 

      <VideosContainer
        background="#fef3c7"
        video={`/assets/videos/Mabele.mp4`}
        thumbnail="assets/videos/MabeleThumbnail.jpg"
        youtubeLink={`https://youtu.be/poMUwkWI6lc?si=OXCSKQSIBdbde6Yz`}
        type="Présentation et comparaison détaillée de deux CMS, PrestaShop et Wordpress (WooCommerce)"
        setting="Cours de Master 1 AMINJ (2021)"
        tools=
          {`Adobe Première Pro`}
        toolsLogo={[
          { name: "Adobe Première Pro", src: "/assets/icons/tools/adobe-premiere.svg" },
        ]}
        presentation="Vidéo qui présente et compare deux CMS permettant de réaliser du commerce en ligne. Le contenu a été réalisé en binôme avec Adrien Cauchy (prises d’écran, textes…) et la vidéo montée par moi-même."
      />

      <div className="mb-5 lg:mb-10">
        <VideosContainer
          background="#dcfce7"
          video={`/assets/videos/BelfortTourisme.mp4`}
          thumbnail="assets/videos/BelfortTourismeThumbnail.jpg"
          youtubeLink={`https://youtu.be/q4TZETGRGgE?si=rMREZocj-R_MdfXR`}
          type="Présentation de la ville de Belfort et de son tourisme"
          setting="Pour un cours de Master FLE d’un ami, Jason Roeum (2020)"
          tools=
            {`Sony Vegas Pro 16`}
          toolsLogo={[
            { name: "Sony Vegas Pro 16", src: "/assets/icons/tools/sony-vegas.svg" }
          ]}
          presentation="Cette vidéo avait pour but d’être présentée à des apprenants FLE de niveau intermédiaire. J’ai aidé mon ami dans ce projet, qui a été réalisé en peu de temps et avec les moyens du bord !
            Script et mise en scène : Jason Roeum.
            Cadrage et montage de la vidéo : moi-même.
          "
        />
      </div>

    </div>
  )
}

export default Videos