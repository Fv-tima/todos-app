import React from "react";

export default function Button() {
  return (
    <div className="links-section">
      <button id="btn_zuri">
        <a href="https://training.zuri.team/">Zuri Team</a>
      </button>
      <button id="books">
        <a href="http://books.zuri.team">Zuri Books</a>
        <sub>
          <p> This is where you find books about design and coding</p>
        </sub>
      </button>
      <button id="book_python">
        <a href="https://books.zuri.team/python-for-beginners?ref_id=<fv-tima>">
          Python Books
        </a>
      </button>
      <button id="pitch">
        <a href="https://background.zuri.team/">Background Check for Coders</a>
      </button>
      <button id="book_design">
        <a href=" https://books.zuri.team/design-rules">Design Books</a>
      </button>
    </div>
  );
}
