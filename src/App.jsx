import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Poster from "./components/Poster";
import Fullpost from "./components/Fullpost";
import "./App.css";
import Admin from './components/Admin'

function App({ createNewPost }) {
  const [info, setInfo] = useState([
    {
      id: 1,
      user: "mickey",
      post: "disney no me paga lo suficiente",
    },
    {
      id: 2,
      user: "el rayo mqueen",
      post: "soy veloz",
    },
    {
      id: 3,
      user: "Antonio",
      post: "donde consigo trabajo?",
    },
    {
      id:4,
      user: "Ruperto",
      post: "¿como uso una computadora?",
    },
    {
      id:5,
      user: "skeletor",
      post: "ombligo",
    },
  ]);
  function createNewPost (newUser, newPost) {
    setInfo([...info, {id: info.length+1,user: newUser, post: newPost}])
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
        <Route path="/posts/:id" element={<Fullpost info={info} />} />
        {/* <Route exact path="/poster" element={<Poster />}/> */}
        <Route path="/admin" element={<Admin />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import React from 'react'