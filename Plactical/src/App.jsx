
// import Header  from "./assets/header.jsx"
// import Footer from "./assets/footer.jsx";
// import Food from "./Food.jsx";

// // import Button from "./button/botton"

// import Card from "./Card.jsx";
// import Student from "./Student";
// import UserGreeting from "./UserGreeting.jsx";
// import List from "./List.jsx";
// import Button from "./Button";
// import ProfilePicture from "./ProfilePicture";


// import MyComponent from "./MyComponent.jsx";

// import Counter from "./Counter.jsx";

// import Title from "./assets/Title.jsx";




import Onchange from "./Onchange.jsx";
import ColorPicker from "./ColorPicker.jsx";
import UpdateArray from "./UpdateArray.jsx";
import ToDoList from "./ToDoList.jsx";

function App() {
  return(
    <>
   {/* <Title/>
    <Counter/>
   
    <MyComponent/>

    
<ProfilePicture/>


    
    <Button/>
    
    <List/>
     
    <UserGreeting isLogedIn={true} username="Elyse"/>
   <Student name="Spongebob" age="30" isStudent={true}/>    
   <Student name="Patrick" age={42} isStudent={false}/>
   <Student name="Squidward" age={50} isStudent={false}/>
   <Student name="Sandy" age={27} isStudent={true}/>

  <Button/>
  <Card/>
  <Header/>
  <Food/>
   <Footer/> 
  */}

  <Onchange/>

  <ColorPicker/>

  <UpdateArray/>

  <ToDoList/>
    </> 
  );
}

export default App
