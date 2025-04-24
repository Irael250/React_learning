

function UserGreeting(props){


if(props.isLogedIn){
  return <h2>Welcome {props.username}</h2>
}
else{
    return <h2>Please LogIn to continue!</h2>
}

}

export default UserGreeting