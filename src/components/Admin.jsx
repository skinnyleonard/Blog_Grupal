import { useState } from "react";

function Admin({ setShow, show }) {
  const [confirm, setConfirm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (confirm == 123) {
      // window.location = '/';
      setShow(!show)
    } else console.log("mal");
    
    setConfirm("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="contraseña para administrador"
          style={{ width: "500px" }}
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <button>ingresar</button>
      </form>
    </>
  );
}

export default Admin;
