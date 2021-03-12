import React from "react"
import youtube from "./youtube.jpg"
import instagram from "./instagram.png"


export default function Header() {
    return(
        <div>
            <h2>#Melani's Kitchen</h2>
            <span>
            <a href="https://www.youtube.com/channel/UC0vkwOj-1WbO1TbkyevYO3g"><img src={youtube} alt="youtube logo" width="60" height="60" /></a>
            <a href="https://www.instagram.com/szokykonyhaja/?hl=hu">
            <img src={instagram} alt="instagram logo" width="60" height="60" />
            </a>
            </span>
        </div>
    )
}