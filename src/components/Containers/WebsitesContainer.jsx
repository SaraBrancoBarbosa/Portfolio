import { Link } from "react-router"
import PropTypes from "prop-types"

function WebsitesContainer({ background, image, title, type, date, role, setting, websiteLink, forumLink, codeLink, video, client, requests, tools }) {
  
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
                className="absolute inset-0 bg-cover bg-center filter blur-xs scale-150 z-0"
                style={{ backgroundImage: `url(${background})` }}
            />

            <div className="relative z-10">
                <div className="flex lg:gap-5 flex-col lg:flex-row py-10 px-5">
                    <div className="flex flex-col gap-5 w-full lg:w-1/2 bg-white/90 rounded-t-md lg:rounded-md p-5 pb-0 lg:pb-5">
                        <div className="flex flex-col gap-2">
                            <img src={image} alt="Logo du projet" className="h-24 md:h-48 w-fit rounded-md" />
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
                                <a href={codeLink} className="underline">{codeLink}</a>
                            </div>
                        }
                        {forumLink &&
                            <div>
                                <h3 className="text-xl md:text-2xl text-violet-500">Lien du forum</h3>
                                <a href={forumLink} className="underline">{forumLink}</a>
                            </div>
                        }
                    </div>

                    <div className="flex flex-col gap-5 w-full lg:w-1/2 bg-white/90 rounded-b-md lg:rounded-md p-5">
                        <div>
                            <h3 className="text-xl md:text-2xl text-violet-500">Lien du site web</h3>
                            {websiteLink &&
                                <a href={websiteLink} className="underline">{websiteLink}</a>
                            }
                            {!websiteLink && 
                                <p>Ce projet n'est pas publié en ligne</p>
                            }
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl text-violet-500">Vidéo(s) de navigation sur le site</h3>
                            <a href={video} className="underline">{video}</a>
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl text-violet-500">Commanditaire</h3>
                            <p>{client}</p>
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl text-violet-500">Demandes du commanditaire</h3>
                            <p>{formatList(requests)}</p>
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl text-violet-500">Outils utilisés</h3>
                            <p>{formatList(tools)}</p>
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
    client: PropTypes.string,
    requests: PropTypes.string,
    tools: PropTypes.string,
}

export default WebsitesContainer