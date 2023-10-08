import React from 'react'

function Header() {
  return (
    <header className="header">
        <h1>algo</h1>
        <h2>mas que algo</h2>
        <img src="../thumbnail_Blog.png" alt="" />
        <form className='buscador'>
          <input type='search' placeholder='buscar un post...'/>
          <button>buscar</button>
        </form>
    </header>
  )
}

export default Header