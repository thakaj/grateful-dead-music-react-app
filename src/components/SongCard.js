import React from "react"


function SongCard({name, id, removeSong}){
    console.log(id)
    function handleDelete(event){
        fetch(`http://localhost:9393/songs/${id}`, {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json',
              "Accepts": `application/json`
            }  
        })
        .then(resp => resp.json())
        .then(data => removeSong(id))
    }


    return (
            <article key={id}>
                {name}<button onClick={handleDelete}>Delete</button>
            </article>
    )
}
export default SongCard