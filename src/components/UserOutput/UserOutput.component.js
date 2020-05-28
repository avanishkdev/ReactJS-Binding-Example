import React from "react";
import "./UserOutput.styles.css";

const UserOutput = (props) => {

 const border = {
     border: "2px  solid red"
 };

    return(<div style={border}> 
            {props.username}
            <p>static text</p>
            <p>{props.username}</p>
        </div>);
}

export default UserOutput;