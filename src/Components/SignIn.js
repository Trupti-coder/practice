import { useRef, useState } from "react";
//import { json, Link } from "react-router-dom";

function SignIn(){

    let[name,setName]=useState("");
    let[email,setEmail]=useState("");
    let[password,setPassword]=useState("");

    function nameChange(event){
        setName(event.target.value);

    }

    function emailChange(event){
        setEmail(event.target.value);

    }

    function passChange(event){
        setPassword(event.target.value);

    }



    function funSubmit(event){
        event.preventDefault();
        console.log(name, email, password);
        let newUserInfo = { userName: name, userEmail: email, userPassword: password };
    
        let existingUser;
        if(localStorage.getItem("userInfo")){
            existingUser = JSON.parse(localStorage.getItem("userInfo"));
        } else {
            existingUser = [];
        }

        if (!Array.isArray(existingUser)) {
            existingUser = []; // Reset to an empty array if it’s not an array
        }
    
        existingUser.push(newUserInfo);
        
        localStorage.setItem('userInfo', JSON.stringify(existingUser));
        alert("data saved to localstorage");
    
        setName("");
        setEmail("");
        setPassword("");
    }
    
    

    return(
        <>
            <form>
                <div>
                     Name:<input type="text" value={name} onChange={nameChange} ></input>
                 </div>
                 <div>
                    Email:<input type="email" value={email} onChange={emailChange} required></input>
                 </div>
                 <div>
                    Password:<input type="password" value={password} onChange={passChange} required></input>
                 </div>
                 <div>
                    <button type="submit" onClick={funSubmit}>SignIn</button>
                    
                 </div>
                
            </form>
            
                
           
        
        </>
    );
}
export default SignIn;