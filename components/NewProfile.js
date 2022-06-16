import React, {useState} from "react";

function NewProfile(props){

    const [fname, setfName] = useState("");

    const [lname, setlName] = useState("");

    const [description, setDescription] = useState("");

    const [image, setImage] = useState("");

    function handleChange1(event) {
        console.log(event.target.value);
        setfName(event.target.value);
    }

    function handleChange2(event) {
        console.log(event.target.value);
        setlName(event.target.value);
    }

    function handleChange3(event) {
        console.log(event.target.value);
        setDescription(event.target.value);
    }

    function handleChange4(event) {
        console.log(event.target.value);
        setImage(event.target.value);
    }

    function setDefault(){
        setfName("");
        setlName("");
        setDescription("");
        setImage("");
    }

    
    return (props.trigger)?(<div className="popup">
        <div className="popup-inner">
        <div>
            <button className="close-btn" onClick={()=> props.setTrigger(false)}>&times;</button>
        </div>
            <input
            onChange={handleChange1}
            type="text"
            placeholder="First Name"
            value={fname}
            />

            <input
            onChange={handleChange2}
            type="text"
            placeholder="Last Name"
            value={lname}
            />

            <input
            onChange={handleChange3}
            type="text"
            placeholder="Description"
            value={description}
            />

            <input
            onChange={handleChange4}
            type="text"
            placeholder="ImageURL"
            value={image}
            />
            <button className="submit-btn" onClick={()=> {props.setTrigger(false); props.addProfile(fname,lname, description,image);{setDefault()};}}>Submit</button>
        </div>
    </div>):null;
}

export default NewProfile;