import React  from "react";
import "./UserInput.styles.css";

const UserInput = (props) => {

 const handleChange = (event) => {
      console.log(event);
      props.change(event);
  }    

  const background = {
  backgroundColor: "blue"
  };

  return ( <input className="input" style={background} type="text" onChange={handleChange}></input>);    
}

export default UserInput;