import { Link } from "react-router"
import PropTypes from "prop-types"

function WebsitesContainer({ image, title, type, date, role, setting, link, video, client, requests, tools }) {
  
    // To start a new line for each element: making a list
    const formatList = (text) => {
        // To divide the text by using line breaks
        return text.split("\n").map((item, index) => (
            <li key={index} className="list-disc ml-4 pl-3">{item}</li>
        ))
    }

    // To start a new line for each new link
    const formatLink = (text) => {
        return text.split("\n").map((item, index) => (
        <div key={index}>
            <a href={item}>
                {item}
            </a>
        </div>
        ))
    }
  
    return (
    <div className="flex py-10 px-5">
        <div className="flex flex-col gap-5 w-1/2">
            <div className="flex flex-col gap-2">
                <img src={image} alt="Logo du projet" className="w-24 sm:w-48" />
                <h2 className="text-4xl text-violet-700">{title}</h2>
            </div>
            <div>
                <h3 className="text-2xl text-violet-500">Type de projet</h3>
                <p>{type}</p>
            </div>
            <div>
                <h3 className="text-2xl text-violet-500">Date</h3>
                <p>{date}</p>
            </div>
            <div>
                <h3 className="text-2xl text-violet-500">Rôle</h3>
                <p>{role}</p>
            </div>
            <div>
                <h3 className="text-2xl text-violet-500">Cadre de réalisation</h3>
                <p>{setting}</p>
            </div>
            <div>
                <h3 className="text-2xl text-violet-500">Lien(s) du projet</h3>
                {formatLink(link)}
            </div>
        </div>

        <div className="flex flex-col gap-5 w-1/2">
            <div>
                <h3 className="text-2xl text-violet-500">Vidéo(s) de navigation sur le site</h3>
                {formatLink(video)}
            </div>
            <div>
                <h3 className="text-2xl text-violet-500">Commanditaire</h3>
                <p>{client}</p>
            </div>
            <div>
                <h3 className="text-2xl text-violet-500">Demandes du commanditaire</h3>
                <p>{formatList(requests)}</p>
            </div>
            <div>
                <h3 className="text-2xl text-violet-500">Outils utilisés</h3>
                <p>{formatList(tools)}</p>
            </div>
        </div>
    </div>
  )
}

WebsitesContainer.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    date: PropTypes.string,
    role: PropTypes.string,
    setting: PropTypes.string,
    link: PropTypes.string,
    video: PropTypes.string,
    client: PropTypes.string,
    requests: PropTypes.string,
    tools: PropTypes.string,
}

export default WebsitesContainer