import { useState } from "react";
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
    <div>
      <form onSubmit={handleSubmit}>
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
