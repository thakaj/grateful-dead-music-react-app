import React, {useState} from 'react'


function Form(){
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
        .then(data => console.log(data))
        setName("")
    }  
      
    function handleChange(event){
        setName(event.target.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"  onChange ={handleChange}/>
            <button type ="Submit" value={name}>Submit!</button>
        </form>
    ) 
}
export default Form