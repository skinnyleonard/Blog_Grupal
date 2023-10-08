import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import App from "../App";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; 

function Posts({ info }) {
  return (
    <>
      {info.map((post) => (
        <div className="posteo">
          <Link to={`/posts/${post.user}`}>
           <h1><Markdown remarkPlugins={[remarkGfm]}>{post.post}</Markdown></h1>
          </Link>
          <h3>publicado por: {post.user}</h3>
        </div>
      ))}
    </>
  );
}

export default Posts;
