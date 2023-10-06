import { useEffect, useState } from 'react'
import Comentador from './Comentador'

function Comentarios() {

    const [ comments, setComments ] = useState([
        {thename: 'pablito', comment:'me gusta si dale'},
    ])
    
    function createNewComment(newName, newComment){
        setComments([...comments, {thename: newName, comment: newComment}])
    }
    useEffect(()=> {
        let data = localStorage.getItem('thenames')
        if (data){
            setComments(JSON.parse(data))
        }
    }, [])
    useEffect(()=> {
        let data = localStorage.getItem('thecomments')
        if (data){
            setComments(JSON.parse(data))
        }
    }, [])
    useEffect(()=> {
        localStorage.setItem('thenames', JSON.stringify(comments))
    }, [ comments ])
    useEffect(()=> {
        localStorage.setItem('thecomments', JSON.stringify(comments))
    }, [ comments ])
    return (
        <div>
        <Comentador createNewComment={createNewComment}/>
            {comments.map(coment => (
            <div>
                <h2>{coment.thename}</h2>
                <h3>{coment.comment}</h3>
            </div>
                
            ))}
        </div>
    )
}
export default Comentarios