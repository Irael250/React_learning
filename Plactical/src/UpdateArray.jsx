import { useState } from "react"

const UpdateArray=()=>{


    const [foods, setFoods]=useState(["Apple","Orange","Banana"]);

    const addFood=()=>{
        const newfood=document.getElementById("foodInput").value;
       document.getElementById("foodInput").value="";

       setFoods(foods=>[...foods,newfood]);

    }
    const removeFood=(index)=>{
setFoods(foods.filter((_, i)=> i !== index));
 
    }

    return(

        <>
           <div>
            <h2>List of Foods</h2>
            <ul>
                {foods.map((food, index)=> <li onClick={ () => removeFood(index)} key={{index}}>{food}</li>)}  
            </ul>
            <input type="text" id="foodInput" placeholder="Enter Food Name" />
            <button onClick={addFood} >Add Food</button>
           </div>
        </>
    );

}
export default UpdateArray