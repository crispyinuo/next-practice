import React from "react";

function Button(props){
    return <button class="addbutton" type="button" onClick={()=> props.setTrigger(true)}>+</button>
}

export default Button;