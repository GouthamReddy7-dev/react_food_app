import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";
function Register(){
    let emails = useRef();
    let uname = useRef();
    let pass = useRef();
    const [name, setname] = useState('')
    const [password, setpassw] = useState('')
    const [email, setemail] = useState('')
    const handelsubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/register',{name,email,password}) // name:name ,password:password (or) name,password both are same
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
    }
    
    function getvalues() {
       //let username=uname.current.value;
       //let upassword=pass.current.value;
       //let uemailsss=emails.current.value;
        
       // console.log(name);
       // console.log(passw);
       // console.log(emailss);
       // uname.current.value='';
       // pass.current.value='';
       // emails.current.value='';
    
        //setname(username);
        //setpassw(upassword);
        //setemail(uemailsss);
        //uname.current.value='';
        //pass.current.value='';
        //emails.current.value='';
        //console.log(name,passw,email)
        console.log(name)
        console.log(password)
        console.log(email)
        uname.current.value='';
        pass.current.value='';
        emails.current.value='';
    

    }
    return(
        <>
        <div id="box" style={{ paddingBottom: "40px" }}>
                    <h2 id="text" style={{ top: "1px" }}>Sign Up</h2>
                    
                    <form onSubmit={handelsubmit}>
                    <lable for="intag" id="labels"><strong>USERNAME</strong></lable>
                    <input type="text" placeholder="User name" required className="intag" style={{left:"-19px" }} ref={uname} onChange={(e) => setname(e.target.value)} />
                    <br></br>
                    <lable for="intag" id="labels"><strong>PASSWORD</strong></lable>
                    <input type="password" placeholder="Password" required className="intag" ref={pass} onChange={(e) => setpassw(e.target.value)} />
                    <br></br>
                    <lable for="intag" id="labels"><strong>EMAIL</strong></lable>
                    <input type="email" placeholder="enter email" required className="intag" style={{left:"17px" }} ref={emails} onChange={(e) => setemail(e.target.value)} />
                    <br></br>
                    <button value="submit" className="butt"><strong>Sign Up</strong></button>
                    </form>
                    <br></br>
                    <lable for='btn1' style={{position:"relative",left:"60px"}}>Already have account ?</lable>
                    <Link to='/login' value="submit" className="butt1"><strong>Sign In</strong></Link>
                </div>
        </>
    )
}
export default Register
// onClick={getvalues}