import {useState} from "react";
import ProfileCard from "../components/ProfileCard"
import members from "../profilelists"
import Header from "../components/Header"
import Button from "../components/Button"
import NewProfile from "../components/NewProfile";
import Sidebar from "../components/Sidebar";
import Link from "next/link";
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../firebase/fireConfig";


function Team() {

  const[buttonPopup, setButtonPopup] = useState(false);
  //const[memberProfiles, setmemberprofiles] = useState(members);
  const[profileLists, setprofileList] = useState([])
  let l = profileLists.length;

  async function readData(){

    await getDocs(collection(db,"members")).then(querySnapshot => {
        console.log(`Found ${querySnapshot.size} documents.`);
        const profiles = querySnapshot.docs.map(doc => doc.data());
        setprofileList(profiles);
    });
  }

  readData();
  
  return (<div>
    <Sidebar/>
    <div className="body">
    <Header content="Team"/>
    {profileLists.map((x) => (<ProfileCard key= {x.id} fName = {x.fName} lName = {x.lName} description = {x.description} image = {x.imageURL}/>) 
    )}
    </div>
    <Button setTrigger={setButtonPopup}/>
    <NewProfile trigger={buttonPopup} setTrigger={setButtonPopup} size={l}></NewProfile>
  </div>)
}

export default Team;
