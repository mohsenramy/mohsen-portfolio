import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <nav className="navbar">
      <div className="mohsen">
        <i>Mohsen</i>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
