import React from "react"


function SongCard({name, id}){

    return (
            <article key={id}>
                <h2 >{name}</h2>
            </article>
    )
}
export default SongCard