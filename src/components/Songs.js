import React from 'react'
import {useEffect, useState} from 'react'
import SongCard from './SongCard'
import FormSongs from './FormSongs'


function Songs(){
    const [songs, setSongs] = useState([])

    useEffect(()=> {
        fetch('http://localhost:9393/songs/')
        .then(resp => resp.json())
        .then(resp => setSongs(resp.songs))
    },[])
    
    function addNewSong(newSong){
        const addNewSong = [...songs, newSong]
        setSongs(addNewSong)
    }
    function removeSong(removedSongId){
        const removeSong = songs.filter(song => song.id !== removedSongId)
        setSongs(removeSong)
    }


    return (
        <div>
           <h1>Add your favorite songs from the show!</h1>
           <FormSongs addNewSong={addNewSong}/>
           {songs.map(song =><SongCard name={song.name} removeSong={removeSong} key={song.id} id={song.id}/>)}
        </div>
    )
}




export default Songs