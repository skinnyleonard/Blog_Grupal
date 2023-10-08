import React from "react";
import { useParams } from "react-router-dom";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; 

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
              <h1>posteo: <Markdown remarkPlugins={[remarkGfm]}>{post.post}</Markdown></h1>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Fullpost;
