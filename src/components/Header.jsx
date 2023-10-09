import React from "react";
import logoBlog from '../logoBlog.png'
import { Link } from "react-router-dom";
import Poster from "./Poster";

function Header() {
  return (
    <header className="header">
    <h1>postea</h1>
      
      <a
        className="fa-brands fa-github"
        href="https://github.com/skinnyleonard/Blog_Grupal"
        target="_blank"
      ></a>
      <img src={logoBlog}/>
      <form className="buscador">
        <input type="search" placeholder="buscar un post..." />
        <button>buscar</button>
      </form>
    </header>
  );
}

export default Header;
