import React from "react";
import share from "../image/share.png";
import share2 from "../image/share2.png";

export default function Nav() {
  return (
    <div className="share">
      <img src={share} alt="" className="share1" />
      <img src={share2} alt="" className="share2" />
    </div>
  );
}
