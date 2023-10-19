import React from "react";
import logoBlog from "../logoBlog.png";
import { Link } from "react-router-dom";

function Header({ show, setShow }) {
  return (
    <header className="header">
      <Link to={`/poster`}>
        <h1>postea</h1>
      </Link>

      <a
        className="fa-brands fa-github"
        href="https://github.com/skinnyleonard/Blog_Grupal"
        target="_blank"
      ></a>
      <img src={logoBlog} />
      <form className="buscador">
        <input type="search" placeholder="buscar un post..." />
        <button>buscar</button>
      </form>
      {show && <h2>sos administrador</h2>}
      {show && <button className="boton" onClick={() => {setShow(false)}}>salir del admin</button>}
    </header>
  );
}

export default Header;
