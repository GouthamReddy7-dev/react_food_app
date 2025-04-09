import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login(){
    const auth=document.getElementById("loginauth")
    const navigate=useNavigate()
    const [password, setpassw] = useState('')
    const [name, setname] = useState('')
    function loginsuccess(e){
        e.preventDefault()
        axios.post("http://localhost:3001/login",{name,password})
        .then(res=>{
            console.log(res)
            if(res.data==="successful"){
                navigate('/home')
            }
            else if(res.data==="incorrect password"){
                auth.style.display="block"
                console.log("Incorrect password")
            }
            else if(res.data==="No record existed"){
                auth.innerHTML="No record existed"
                auth.style.display="block"
                auth.style.marginLeft="480px"
            }
        })
        .catch(err=>console.log(err))
        
        
        console.log(name+" password : "+password)
    }
    return(
        <>
        <div id="lbox">
            <h2 id="ltext">LOGIN</h2>
            <lable for="lintag" id="llabels"><strong>USERNAME</strong></lable>
        <input type="text" placeholder="User name" required className="lintag" onChange={(e)=>setname(e.target.value)}/>
            <br></br>
            <lable for="intag" id="llabels"><strong>PASSWORD</strong></lable>
            <input type="password" placeholder="Password" required className="lintag" onChange={(e)=>setpassw(e.target.value)}/>
            <br></br>
            <button value="submit" className="lbutt" onClick={loginsuccess}><strong>Login</strong></button>
            <br></br>
            <lable for='btn1' id="llabels">Don't have account ?</lable>
            <Link to='/register' value="submit" className="lbutt1"><strong>Sign up</strong></Link>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 id="loginauth">Incorect password try again</h1>
        </>
    );
}
export default Login


/*
import { Link } from "react-router-dom";
function Login(){
    return(
        <>
        <div id="box">
            <h2 id="text">LOGIN</h2>
            <lable for="intag" id="labels"><strong>USERNAME</strong></lable>
        <input type="text" placeholder="User name" required className="intag"/>
            <br></br>
            <lable for="intag" id="labels"><strong>PASSWORD</strong></lable>
            <input type="password" placeholder="Password" required className="intag"/>
            <br></br>
            <button value="submit" className="butt"><strong>Login</strong></button>
            <br></br>
            <lable for='btn1' id="labels">Don't have account ?</lable>
            <Link to='/register' value="submit" className="butt1"><strong>Sign up</strong></Link>
        </div>
        </>
    );
}
export default Login */