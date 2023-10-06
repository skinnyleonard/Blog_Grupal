import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Comentarios from './components/Comentarios.jsx'
import './index.css'
import { 
    BrowserRouter, 
    Routes, 
    Route 
  } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
        <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<App />} />
            <Route path='/:name' element={<Comentarios />} />
        </Routes>
        </BrowserRouter>
)