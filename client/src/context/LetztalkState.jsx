import React,{useState} from "react";
import letztalkcontext from "./Letztalkcontext";


const LetztalkState = (props) => {
    const [testingdata,settestingdata]=useState("hellow");
    const [homedata,sethomedata]=useState([]);
    const host="http://localhost:8000";

    const showHomecontents=async()=>{
      const response=await fetch(`${host}/api/userpost/homeposts`,{
        method:'GET',
        headers:{
          "Content-Type":"application/json",
          "authtoken":localStorage.getItem('letztalktoken')
        }
      });
      const homedetails=await response.json();
      if(homedetails.success){
        sethomedata(homedetails.allpostslist);
      }
      else{
        alert(homedetails.error);
      }
    }



  return (
    <letztalkcontext.Provider
        value={{
            testingdata,showHomecontents,homedata
        }}
    >{props.children}</letztalkcontext.Provider>
  )
}

export default LetztalkState
