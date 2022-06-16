import {useState} from "react";
import ProfileCard from "../components/ProfileCard"
import members from "../profilelists"
import Header from "../components/Header"
import Button from "../components/Button"
import NewProfile from "../components/NewProfile";
import Sidebar from "../components/Sidebar";
import Link from "next/link";

function Team() {

  const[buttonPopup, setButtonPopup] = useState(false);
  const[memberProfiles, setmemberprofiles] = useState(members);

  function addProfile(firstname, lastname, descriptions, image){

      if(firstname&&lastname&&descriptions&&image){
        let l = memberProfiles.length;
        memberProfiles.push(
          {
            id: l+1,
            fName: firstname,
            lName: lastname,
            imageURL: image,
            description: descriptions
        })
  
        setmemberprofiles(memberProfiles);
  
        console.log(memberProfiles);
      }
  }

  return (<div>
    <Sidebar/>
    <div className="body">
    <Header content="Team"/>
    {memberProfiles.map((x) => (<ProfileCard key= {x.id} fName = {x.fName} lName = {x.lName} description = {x.description} image = {x.imageURL}/>) 
    )}
    </div>
    <Button setTrigger={setButtonPopup}/>
    <NewProfile trigger={buttonPopup} setTrigger={setButtonPopup} addProfile={addProfile}></NewProfile>
  </div>)
}

export default Team;
