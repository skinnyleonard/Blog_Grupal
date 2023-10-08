import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Comentador from "./Comentador";

function Fullpost({ info }) {
  const { user } = useParams();

  const [comments, setComments] = useState([
    { thename: "pablito", comment: "me gusta si dale" },
  ]);

  function createNewComment(newName, newComment) {
    setComments([...comments, { thename: newName, comment: newComment }]);
  }
  useEffect(() => {
    let data = localStorage.getItem("thenames");
    if (data) {
      setComments(JSON.parse(data));
    }
  }, []);
  useEffect(() => {
    let data = localStorage.getItem("thecomments");
    if (data) {
      setComments(JSON.parse(data));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("thenames", JSON.stringify(comments));
  }, [comments]);
  useEffect(() => {
    localStorage.setItem("thecomments", JSON.stringify(comments));
  }, [comments]);

  return (
    <>
      <section>
        <div>
          {info
            .filter((post) => post.user === user)
            .map((post) => (
              <div className="postPres">
                <h3>{post.user} <small>posteo:</small></h3>
                <h1>
                  <Markdown remarkPlugins={[remarkGfm]}>{post.post}</Markdown>
                </h1>
              </div>
            ))}
          <div>
            {/* returns de los comentarios */}
            <Comentador createNewComment={createNewComment} />
            {comments.map((coment) => (
              <div className="comments">
                <h2>{coment.thename} <small><small>comento:</small></small></h2>
                <h3>{coment.comment}</h3>
              </div>
            ))}
          </div>
          {/* finaliza los returns de los comentarios */}
        </div>
      </section>
    </>
  );
}

export default Fullpost;
