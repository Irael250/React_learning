function About(){

    return(
        <>

        <div className="holder">
              <h1 className="titleLogin">Log In</h1>
         <form action="#">

            <input className="loginI" type="text" placeholder="Enter Username" name="Username"/>
            <input className="loginI" type="text" placeholder="Enter Password" name="Password" />

            <button className="loginB" type="submit">Submit</button>
         </form>
         </div>
        </>
    )
}

export default About