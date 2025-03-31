

function ProfilePicture(){

    const ImageUlr= './src/gramer.png';

    const hundleclick= (e)=> e.target.style.display="none";
  return <img onClick={(e)=> hundleclick(e)} src={ImageUlr}/>
 }

export default ProfilePicture