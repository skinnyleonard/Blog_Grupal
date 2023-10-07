import React from "react";
import { useState } from "react";
import Posts from "./Posts";
import Header from "./Header";

function Poster({ info, createNewPost }) {
  const [newUser, setNewUser] = useState("");
  const [newPost, setNewPost] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    createNewPost(newUser, newPost);
    localStorage.setItem("theusers", newUser);
    localStorage.setItem("theposts", newPost);
    setNewUser("");
    setNewPost("");
  }
  return (
    <>
      <Header />
      <div className="updates">
        <h1 style={{lineHeight:'0'}}>Actualizaciones:</h1>
        <small>7/10/2023</small>
        <h2 style={{lineHeight:'0'}}>useParams</h2>
      </div>
        <form onSubmit={handleSubmit} className="comenterForm">
          <h1>Postea algo:</h1>
          <input
            type="text"
            placeholder="nombre"
            onChange={(e) => setNewUser(e.target.value)}
            value={newUser}
          />
          <input
            type="text"
            placeholder="post"
            onChange={(e) => setNewPost(e.target.value)}
            value={newPost}
          />
          <button>Enviar</button>
        </form>
        <div>
          <Posts info={info} />
        </div>
    </>
  );
}

export default Poster;