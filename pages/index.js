import React from "react";
import Team from './team';
import firebase from '../firebase/fireConfig';


function index(){
  return (<React.StrictMode>
    <Team/>
  </React.StrictMode>);
}

export default index;
