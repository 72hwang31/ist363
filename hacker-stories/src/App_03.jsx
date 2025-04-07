// brings in react useState code
import {useState} from "react";

//sets up useState, what variable, what function changes it, and what start value
const Home =()=>{
    const [name, setName] = useState('Harvey');


//function actually making dynamic change
let handleClick = () =>{
    setName('Shazam')
}


    return (
        <div>
            <h1>Hello World</h1>
            {name}
            <button onClick={handleClick}>Update</button>
        </div>
    );
}

export default Home;