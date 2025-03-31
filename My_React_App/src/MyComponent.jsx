import React,{useState} from "react"


function MyComponent(){
    
    const [name, setName] =useState("Guest");

    const [age, setAge]=useState(0);


    const updateName =() =>{
        setName("Ellyse");

    }


    const Increment= ()=>{
        setAge(age+1);
    }
    return(

        <div>
            <p>Name:{name}</p>

            <button onClick={updateName}>Set Name</button>


            <p>Age:{age}</p>

            <button onClick={Increment}> Increment</button>
        </div>
    );
}

export default MyComponent