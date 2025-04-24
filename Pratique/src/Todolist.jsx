import { useState } from "react"

function Todolist(){

    

    const [car,Setcar]=useState('Toyota');
    const[year,Setyear]=useState(new Date().getFullYear());
    const[model,Setmodel]=useState('coloraX');
    const[add,setAdd]=useState([]);

    function handleAdd(event){
        setAdd(event.target.value);
    }


    function handleCar(event){
        Setcar(event.target.value)
    }

    function handleYear(event){
        Setyear(event.target.value)
    }

    function handleModel(event){
        Setmodel(event.target.value)
    }


    
    return(<>
    <input type="text" value={car}  onChange={handleCar}/>
    <input type="number" value={year} onChange={handleYear}/>
   <input type="text" value={model} onChange={handleModel}/>
   <button onClick={handleAdd}>Add Car</button>
    </>);
 }

 export default Todolist