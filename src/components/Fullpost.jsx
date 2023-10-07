import React from "react";
import { useParams } from "react-router-dom";

function Fullpost({ info }) {
  const { user } = useParams();
  return (
    <section>
      <div>
        {info
          .filter((post) => post.user === user)
          .map((post) => (
            <div className="postPres">
              <h3>{post.user}</h3>
              <h1>posteo: {post.post}</h1>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Fullpost;
