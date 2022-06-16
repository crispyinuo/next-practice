import React from "react";
import Link from "next/link";

const sidebardata = [
    {
       key: "1",
       title: "Home",
       Link:"/home" 
    },
    {
        key: "2",
        title: "Team",
        Link:"/team" 
     },
     {
        key: "3",
        title: "Help",
        Link:"/help" 
     },

]

function Sidebar(){
    return <div className = "sidebar">
    <div className  = "logoblock">
    <img className = "logo" src="https://static.wixstatic.com/media/1adcde_08b976048fa24d13810b92077fc1fa0b~mv2.png/v1/fill/w_274,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/np%20text%20black.png"/>
    </div>
    <ul className = "sidebarlist">
    {sidebardata.map((x)=>{
        return <li key={x.key} className="row"><Link href={x.Link}><a>{x.title}</a></Link></li>
    })}
    </ul>
    </div>
}

export default Sidebar;