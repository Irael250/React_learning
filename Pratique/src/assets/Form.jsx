  import React, { useState,useEffect } from "react"
    
  function Form(){

    

    const [users,setUser] = useState([])
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('');


      function userss(){

        event.preventDefault();
        if(!username || !email ||!password){
          alert('fill all fields')
        }
        else{
          const userrr={username:username,
            email:email,
            password:password
          }
  
          setUser([...users,userrr]);
          setUsername('')
          setEmail('')
          setPassword('')
        }
      
      }
    
     
    const HandleUsername=(event)=>{
      setUsername(event.target.value)
    }
    const HandleEmail=(event)=>{
      setEmail(event.target.value)
    }
    const HandlePassword=(event)=>{
      setPassword(event.target.value)
    }

    

    return(<>

      <form>
        username: <input type="text" value={username} placeholder='enter your name' onChange={HandleUsername
        }/><br/>
        email: <input type="text" value={email} placeholder='enter your email' onChange={HandleEmail
        }/><br/>
        password: <input type="password" value={password} placeholder='enter your password' onChange={HandlePassword
        }/> <br />
        <button type="submit" onClick={userss}>submit</button>
        <p>{users.map((u,index)=>(<ul><li key={index}> {u.username} ||  {u.email} || {u.password}  </li></ul>))}</p>

      </form>

    </>)
}

export  default Form