import { useState } from "react";
import axios from "axios";

function Userform(){
  const[userform, setUserform]=useState({
        name:'Ram',
        phone:'1'
  });
  const save=function(event){
      console.log(userform.name);
      axios.post('http://localhost:8080/user',userform)
      .then(function(response)
      {console.log(response);
    })
      .catch(function(error){
        console.log(error);
      });
     
  }
 return(
  <div>
   <input value={userform.name} name='name' placeholder='name'onChange={updateState}></input>
   <input value={userform.phone} name='phone' placeholder='phone Number' onChange={updateState}></input>
   <button onClick={save}>SAVE</button>
  </div>
  
 )

 function updateState(event){
     const current={...userform,
         [event.target.name]:event.target.value};
         console.log(current);
         setUserform(current);
 }
 
 }
export default Userform;
