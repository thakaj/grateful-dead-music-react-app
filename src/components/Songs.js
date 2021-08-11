import React from 'react'
import {useEffect, useState} from 'react'
import SongCard from './SongCard'



function Songs(){
    const [songs, setSongs] = useState([])

    useEffect(()=> {
        fetch('http://localhost:9393/songs/')
        .then(resp => resp.json())
        .then(resp => setSongs(resp.songs))
    },[])

    return (
        <div>
           <h1>Hello World!</h1>
           {songs.map(songs =><SongCard name={songs.name} key={songs.id}/>)}
        </div>
    )
}




export default Songs