import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import App from "../App";

function Posts({ info }) {
  return (
    <>
      {info.map((post) => (
        <div className="posteo">
          <Link to={`/posts/${post.user}`}>
            <h1>{post.post}</h1>
          </Link>
          <h3>{post.user}</h3>
        </div>
      ))}
    </>
  );
}

export default Posts;
