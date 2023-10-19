import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; 
import Header from "./Header";

function Posts({ info, setInfo, show, setShow, comments, setComments }) {

  function deletePosts(id){
    const newPosts = info.filter(post => post.id !== id)
    
    const newComments = comments.filter(comment => comment.id !== id)
    setInfo(newPosts)
    setComments(newComments)
  }
  return (
    <>
     <div className="updates">
        <h1 style={{lineHeight:'0', fontWeight:'lighter'}}>Actualizaciones:</h1>
        <small>8/10/2023</small>
        <h2 style={{lineHeight:'0', fontSize:'19px'}}>corrio la formula 1</h2>
      </div>
      <Header show={show} setShow={setShow}/>
      {info.map(post => 
        <div >
          <Post 
          link={<Link to={`/posts/${post.id}`}>
           <h1><Markdown remarkPlugins={[remarkGfm]}>{post.post}</Markdown></h1></Link>} 
          pub={post.user} 
          info={info}
          deletePosts={deletePosts}
          ide={post.id}
          setShow={setShow}
          show={show}
          />
        </div>
      )}      
    </>
  );
}

export default Posts;

function Post({ link, pub, info, deletePosts, ide, show, ide2 }){

  return(
    <div className="posteo">
      <h1>{link}</h1>
      {show && <button className="fa-solid fa-xmark" onClick={() => deletePosts(ide)}></button>}
      <h3>publicado por: {pub}</h3> 
    </div>
  )
}
