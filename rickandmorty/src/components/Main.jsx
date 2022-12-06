import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Characters from "./Characters";


export default function Main(){

const [characters, setCharacters] = useState()

useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(data => setCharacters(data.results))
    .catch(error => console.log(error))
    }, [])

console.log(characters)

    return (
        characters ? 
    <div className="card">
        <Characters char={characters}/>
    </div> :
    <div>
        <h1>Loading</h1>
    </div>
    )
}