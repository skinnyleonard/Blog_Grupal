import { useState } from "react";
import "../App.css";
export function Comenter(props) {
  const [newUser, setNewUser] = useState("");
  const [newPost, setNewPost] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.createNewPost(newUser, newPost)
    localStorage.setItem('theusers', newUser)
    localStorage.setItem('theposts', newPost)
    // localStorage.setItem('theposts', newPost)
    setNewPost("");
  }

  return (
    <div className="inputs">
      <div>
        <h1 style={{lineHeight:'0'}}>Actualizaciones:</h1>
        <small>5/10/2023</small>
        <h2 style={{lineHeight:'0'}}>estilos</h2>
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
    </div>
  );
}
export default Comenter;