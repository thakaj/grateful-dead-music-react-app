import React from "react"


function SongCard({name, id}){
    

    return (
            <article key={id}>
                {name}<button onClick={console.log("hello")}>Delete</button>
            </article>
    )
}
export default SongCard