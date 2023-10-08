import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Poster from "./components/Poster";
import Fullpost from "./components/Fullpost";
import "./App.css";

function App({ createNewPost }) {
  const [info, setInfo] = useState([
    {
      user: "mickey",
      post: "disney no me paga lo suficiente",
    },
    {
      user: "el rayo mqueen",
      post: "soy veloz",
    },
    {
      user: "Antonio",
      post: "donde consigo trabajo?",
    },
    {
      user: "Ruperto",
      post: "¿como uso una computadora?",
    },
    {
      user: "skeletor",
      post: "ombligo",
    },
  ]);
  function createNewPost (newUser, newPost) {
    setInfo([...info, {user: newUser, post: newPost}])
  }
  useEffect(() => {
    let data = localStorage.getItem('theusers')
    if (data) {
      setInfo(JSON.parse(data))
    }
  }, [])
  useEffect(() => {
    let data = localStorage.getItem('theposts')
    if (data) {
      setInfo(JSON.parse(data))
    }
  }, [])

  useEffect(() =>{
    localStorage.setItem('theposts', JSON.stringify(info))
  }, [ info ])
  useEffect(() =>{
    localStorage.setItem('theusers', JSON.stringify(info))
  }, [ info ])

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Poster info={info} createNewPost={createNewPost}/>} />
        <Route path="/posts/:user" element={<Fullpost info={info} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import React from 'react'
