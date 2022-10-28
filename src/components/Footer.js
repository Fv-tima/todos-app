import React from "react";
import slack from "../image/slack.png";
import github from "../image/Icon.png";
import zuri from "../image/zuri.png";
import ing from "../image/I4G.png";

export default function Footer() {
  return (
    <footer>
      <div className="social">
        <img src={slack} alt="" />
        <img src={github} alt="" />
      </div>
      <div className="designs">
        <img src={zuri} alt="" />
        <p>HNG Internship 9 Frontend Task </p>
        <img src={ing} alt="" />
      </div>
    </footer>
  );
}
