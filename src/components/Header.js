import profile from "../image/profile-img.png"

import React from 'react'

export default function Header() {
  return (

    <div className="profile_section">
      <img src={profile} alt="" id="profile_img" />
      <h5 id="header_title"> Fatima Oluwalogbon</h5>
      <button id="twitter">
        <a href=" https://twitter.com/Zvhra2">Twitter</a>
      </button>
      <button id="slack">
        <a href="#">fv-tima</a>
      </button>
    </div>
  );
}
