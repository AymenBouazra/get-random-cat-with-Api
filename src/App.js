import React,{useState} from "react";
import './App.css'

function App(){
    const CatApi="https://api.thecatapi.com/v1/images/search"
    const [CatURL,setCat] = useState("https://cdn2.thecatapi.com/images/9ch.jpg")
    function randomCat(){
        fetch(CatApi)
            .then((res)=>res.json())   
            .then((cats)=>{ 
                const cat = cats[0].url
                setCat(cat)
                }
            )
            .catch((error)=>
                console.log('error: ',error)
                )
    }
    return(
        <div className="Container">
            <h1 >Random Cat</h1>
            <img src={CatURL} alt="Cat.."/>
            <button onClick={randomCat}>Random cat change</button>
        </div>
    )

}

export default App;