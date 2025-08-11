import PropTypes from "prop-types"

// To start a new line for each element: making a list
    const formatList = (text) => {
        // To divide the text by using line breaks
        return text.split("\n").map((item, index) => (
            <li key={index} className="list-none">{item}</li>
        ))
    }

function VideosContainer({ background, video, youtubeLink, thumbnail, type, setting, tools, toolsLogo, presentation }) {
  return (
    <section 
        className="flex flex-col xl:flex-row w-full gap-5 rounded-2xl p-5 md:p-10"
        style={{ backgroundColor: background }}
    >
        
        <div className="flex w-full justify-center">
            <video controls className="aspect-16/9 w-292 rounded-2xl" poster={thumbnail}>
                <source src={video} type="video/mp4" />
                Désolé, votre navigateur ne supporte pas la balise vidéo.
            </video>
        </div>

        <div className="flex flex-col gap-5 w-full bg-white rounded-2xl p-5 md:p-10">
            <div>
                <h3 className="text-xl md:text-2xl text-violet-500">Lien YouTube de la vidéo</h3>
                <a href={youtubeLink} target="_blank" className="underline">{youtubeLink}</a>
            </div>
            <div>
                <h3 className="text-xl md:text-2xl text-violet-500">Type de projet</h3>
                <p>{type}</p>
            </div>
            <div>
                <h3 className="text-xl md:text-2xl text-violet-500">Cadre de réalisation</h3>
                <p>{setting}</p>
            </div>
            <div>
                <h3 className="text-xl md:text-2xl text-violet-500">Logiciel</h3>
                <p>{formatList(tools)}</p>
                {toolsLogo && (
                    <div className="flex items-center justify-start gap-4 mt-4">
                        {toolsLogo.map((tool, index) => (
                        <img
                            key={index}
                            src={tool.src}
                            alt={tool.name}
                            title={tool.name}
                            className="h-8 w-8 md:h-12 md:w-12 object-contain hover:scale-120 transition-transform duration-200"
                        />
                        ))}
                    </div>
                )}
            </div>
            <div>
                <h3 className="text-xl md:text-2xl text-violet-500">Présentation du projet</h3>
                <p>{presentation}</p>
            </div>
        </div>
    </section>
  )
}

VideosContainer.propTypes = {
    background: PropTypes.string,
    video: PropTypes.string,
    type: PropTypes.string,
    setting: PropTypes.string,
    tools: PropTypes.string,
    toolsLogo: PropTypes.string,
    presentation: PropTypes.string,
    youtubeLink: PropTypes.string,
    thumbnail: PropTypes.string,
}

export default VideosContainer