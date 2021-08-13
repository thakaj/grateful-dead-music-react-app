import React, {useState} from 'react'


function Form({addNewSong}){
    const [name, setName] = useState("")

    function handleSubmit(event){
        event.preventDefault()
        fetch('http://localhost:9393/songs/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify({
                name: name
            })
        })
        .then(response => response.json())
        .then(data => addNewSong(data))
        window.location.reload()      
    }  
      
    function handleChange(event){
        setName(event.target.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Song Name: </label>
            <input type="text"  
            onChange ={handleChange}
            placeholder="enter your song name..."/>
            <button type ="Submit" value={name}>Submit!</button>
        </form>
    ) 
}
export default Form