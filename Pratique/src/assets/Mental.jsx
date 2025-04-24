  
  import { useState } from "react";

    function Counter() {
        const [count, setCount] = useState(0);

        const handle=()=>{
            setCount( count + 1);
        }

        const decrement=()=>{

            setCount(count -1);
        }

        const reset=()=>{

            setCount(0);
        }

    
        return (
        <div>
        <h1>Count: {count}</h1>
        <button onClick={handle}>Increment</button>

        <button onClick={reset}>reset</button>

        <button onClick={decrement}>Decrement</button>
        </div>
        );
        

 }

 export default Counter