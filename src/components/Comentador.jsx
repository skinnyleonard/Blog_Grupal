import { useState } from "react";

function Comentador(props) {
  const [newComment, setNewComment] = useState("");
  const [newName, setNewName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.createNewComment(newName, newComment)
    localStorage.setItem("thenames", newName);
    localStorage.setItem("thecomments", newComment);
    setNewName("");
    setNewComment("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="nombre"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <input
        type="text"
        placeholder="comenta, sin miedo"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button>Enviar</button>
    </form>
  );
}
export default Comentador;
