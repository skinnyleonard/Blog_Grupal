import { useEffect, useState } from "react";
import "./App.css";
import { Comenter }from './components/Comenter'
import { Link } from "react-router-dom";

function App() {

  const [ posts, setPosts ] = useState([
    {user:'el rayo mqueen', post:'soy veloz'},
    {user:'el jony', post:'cuando jugamos un fulbo?'},
    {user:'Antonio', post:'¿Donde puedo conseguir trabajo?'},
    {user:'Manuel', post:'¿Recomendaciones de lapiceras para dibujo tecnico?'},
  ])

  function createNewPost(newUser, newPost){
    setPosts([...posts, {user: newUser, post: newPost}])
  }
  useEffect(() => {
    let data = localStorage.getItem('theusers')
    if (data) {
      setPosts(JSON.parse(data))
    }
  }, [])
  useEffect(() => {
    let data = localStorage.getItem('theposts')
    if (data) {
      setPosts(JSON.parse(data))
    }
  }, [])

  useEffect(() =>{
    localStorage.setItem('theposts', JSON.stringify(posts))
  }, [ posts ])
  useEffect(() =>{
    localStorage.setItem('theusers', JSON.stringify(posts))
  }, [ posts ])

  return(
    <div>
      <Comenter createNewPost={createNewPost}/>
      {posts.map(post => (
        <div className="postContenedor">
          <Link to={post.user}><h1>{post.user}</h1></Link>
          <p>{post.post}</p>
        </div>
      ))}
    </div>
  )
}
export default App;