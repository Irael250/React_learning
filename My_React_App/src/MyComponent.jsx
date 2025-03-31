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



    const decrement= ()=>{
        setAge(age-1);
        
    }

 const resetAge=()=>{
    setAge(0);
 }
    return(

        <div>
            <p>Name:{name}</p>
            <p>Age:{age}</p>
            <button onClick={updateName}>Set Name</button>
            <button onClick={resetAge}>Reset Age</button>

            <button onClick={Increment}> Increment</button>
        
            

            <button onClick={decrement}> Decrement</button>
            </div>
    );
}

export default MyComponent