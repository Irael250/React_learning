import { useState } from "react";

function Services(){

    const [set,SetNumber]= useState(0);

    const countUp=()=>{
        SetNumber( set + 1 );
    }
    const countDown=()=>{
        SetNumber( set - 1 );
    }
    const Reset=()=>{
        SetNumber( 0);
    }


    return(

        <>
         <h1>Events</h1>
       <div className="holderEvents">
            <p>{set}</p>
           <button type="button" onClick={countUp}>Increase</button>
           <button type="button" onClick={Reset}>Reset</button>
           <button type="button" onClick={countDown}>Decrease</button>
       </div>
        </>
    );
}

export default Services