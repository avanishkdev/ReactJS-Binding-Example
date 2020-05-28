import React from "react";
import "./UserOutput.styles.css";

const UserOutput = (props) => {
 const border = {
     border: "2px  solid red"
 };

    return(<div style={border}> 
            {props.username}
            <p>{props.text1}</p>
            <p>{props.text2}</p>
        </div>);
}

export default UserOutput;