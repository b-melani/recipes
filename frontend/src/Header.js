import React from 'react'
import youtube from './images/youtube.jpg'
import instagram from './images/instagram.png'

export default function Header() {
  return (
    <div className="d-flex flex-row justify-content-around border header">
      <h2 className="d-inline p-3">#Melani's Kitchen</h2>
      <span>
        <a href="https://www.youtube.com/channel/UC0vkwOj-1WbO1TbkyevYO3g">
          <img src={youtube} alt="youtube logo" width="70" height="70" />
        </a>
        <a href="https://www.instagram.com/szokykonyhaja/?hl=hu">
          <img src={instagram} alt="instagram logo" width="50" height="50" />
        </a>
      </span>
      <button>Bejelentkezés</button>
    </div>
  )
}
