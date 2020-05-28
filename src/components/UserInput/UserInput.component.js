import React  from "react";
import "./UserInput.styles.css";

const userInput = (props) => { 
  const background = {
      backgroundColor: "blue"
  };

  return ( <input className="input" style={background} type="text" onChange={props.changed} value={props.name}></input>);    
}

export default userInput;