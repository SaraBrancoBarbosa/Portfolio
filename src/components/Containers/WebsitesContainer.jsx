import { Link } from "react-router"
import PropTypes from "prop-types"

function WebsitesContainer({ background, image, title, type, date, role, setting, websiteLink, forumLink, codeLink, video, requests, tools, toolsLogo }) {
  
    // To start a new line for each element: making a list
    const formatList = (text) => {
        // To divide the text by using line breaks
        return text.split("\n").map((item, index) => (
            <li key={index} className="list-disc ml-4 pl-3">{item}</li>
        ))
    }
  
    return (
        <section className="relative overflow-hidden rounded-md">

            <div 
                className="absolute inset-0 bg-cover bg-center filter scale-150 z-0 bg-blend-multiply bg-gray-400 "
                style={{ backgroundImage: `url(${background})` }}
            />

            <div className="relative z-10">
                <div className="flex lg:gap-10 flex-col lg:flex-row p-5 md:p-10">
                    <div className="flex flex-col gap-5 w-full lg:w-1/2 bg-white rounded-t-md lg:rounded-md p-5 pb-0 lg:pb-5">
                        <div className="flex flex-col gap-2 items-center text-center lg:items-start lg:text-start">
                            <img src={image} alt="Logo du projet" className="h-24 md:h-40 w-fit rounded-md" />
                            <h2 className="text-3xl md:text-4xl text-violet-700">{title}</h2>
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl text-violet-500">Type de projet</h3>
                            <p>{type}</p>
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl text-violet-500">Date</h3>
                            <p>{date}</p>
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl text-violet-500">Rôle</h3>
                            <p>{role}</p>
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl text-violet-500">Cadre de réalisation</h3>
                            <p>{setting}</p>
                        </div>
                        {codeLink &&
                            <div>
                                <h3 className="text-xl md:text-2xl text-violet-500">Lien du code</h3>
                                <a href={codeLink} target="_blank" className="underline">{codeLink}</a>
                            </div>
                        }
                        {forumLink &&
                            <div>
                                <h3 className="text-xl md:text-2xl text-violet-500">Lien du forum</h3>
                                <a href={forumLink} target="_blank" className="underline">{forumLink}</a>
                            </div>
                        }
                    </div>

                    <div className="flex flex-col gap-5 w-full lg:w-1/2 bg-white rounded-b-md lg:rounded-md p-5">
                        <div>
                            <h3 className="text-xl md:text-2xl text-violet-500">Vidéo(s) de navigation sur le site</h3>
                            <a href={video} target="_blank" className="underline">{video}</a>
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl text-violet-500">Demandes du commanditaire</h3>
                            <p>{formatList(requests)}</p>
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl text-violet-500">Outils utilisés</h3>
                            <p>{formatList(tools)}</p>
                            {toolsLogo && (
                                <div className="flex items-center justify-center gap-4 mt-4">
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
                            <h3 className="text-xl md:text-2xl text-violet-500">Lien du site web</h3>
                            {websiteLink &&
                                <a href={websiteLink} target="_blank" className="flex justify-center">
                                    <button type="button" className="text-white rounded-2xl mt-3 hover:scale-110 transition-transform duration-200">
                                        Ouvrir le site web
                                    </button>
                                </a>
                            }
                            {!websiteLink && 
                                <p>Ce projet n'est pas publié en ligne</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

WebsitesContainer.propTypes = {
    background: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    date: PropTypes.string,
    role: PropTypes.string,
    setting: PropTypes.string,
    websiteLink: PropTypes.string,
    codelink: PropTypes.string,
    forumLink: PropTypes.string,
    video: PropTypes.string,
    requests: PropTypes.string,
    toolsLogo: PropTypes.string,
    tools: PropTypes.string,
}

export default WebsitesContainer