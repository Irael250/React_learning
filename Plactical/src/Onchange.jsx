 
 import { useState } from "react";


function Onchange(){

    const [name, setName] =useState();
    const [quant, setqua] = useState(0);
    const [pay,setPayment]=useState();
    const [gender,setGender]=useState();

    const nameschangers =(event) =>{

        setName(event.target.value);
    }

 const changequantity=(quant)=>{

    setqua(quant.target.value);
 }

 const paymentmethods=(pay)=>{
setPayment(pay.target.value);

 }

 const genderOption=(gender)=>{

    setGender(gender.target.value);
 }




    return(

        <>

        <input  onChange={nameschangers} value={name}/>
        <p>Name: {name} </p>
        <input type="number"  onChange={changequantity} value={quant}/>
        <p>Quantity: {quant}</p>

        <select onChange={paymentmethods} value={pay}>
        <option value="">Select option</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">Master Card</option>
        <option value="Giftcard">GiftCard</option>
        <option>Visa</option>
        </select>

        <p>Payment Method: {pay}</p>

        <label>Male
            <input type="radio" value="Male" checked={gender === "Male"} onChange={genderOption}  />
        </label>
        <br />
        <label> female

        <input type="radio" value="Female" checked={gender === "Female"} onChange={genderOption}  />
        </label>

        <p>Gender: {gender}</p>
        
        </>
    );
 }

 export default Onchange