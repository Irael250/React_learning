
 import PropTypes from 'prop-types';
function Student(props){

return(
    <div className="student">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Students: {props.isStudent ? "yes" : "No"}</p>
    </div>
);

}
Student.protoTypes ={
    name: PropTypes.string,
    age:PropTypes.number,
    isStudent:PropTypes.bool,
  
  }
  

export default Student