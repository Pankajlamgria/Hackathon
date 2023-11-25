import "./signup.scss";
import { useState } from "react";
import letzTalk from "../../assets/letztalk-white.png";
import { Link, useNavigate } from "react-router-dom";


const SignUp = () => {
  // const [text, setText] = useState("");
  // const [pass, setPass] = useState("");
  // const [number, setNumber] = useState("");
  const [signindetail,setsignindetail]=useState({username:"",email:"",password:"",phoneNumber:0});
  const host="http://localhost:8000";
  const navigate=useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response=await fetch(`${host}/api/auth/signin`,{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({username:signindetail.username,email:signindetail.email,password:signindetail.password,phoneNumber:signindetail.phoneNumber})
    });
    const signinres=await response.json();
    if(signinres.success){
      localStorage.setItem('letztalktoken',signinres.authtoken);
      localStorage.setItem('myemail',signindetail.email);
      localStorage.setItem('username',signinres.createuser.username);
      localStorage.setItem('myImgurl',signinres.createuser.profileurl);
      console.log(signinres);
      navigate('/');
      // window.location.reload(false);
    }
    else{
      alert(signinres.error);
    }

  };
  const handlechangedetails=(e)=>{
    setsignindetail({...signindetail,[e.target.name]:e.target.value});
  }

  return (
    <div className="signup-page">
      <div className="signup">
        <div>
          <img
            src={letzTalk}
            alt="Logo"
            width="200px"
            height="auto"
            className="signup-logo"
          />
        </div>
        <form className="signup-form" onSubmit={handleSubmit}>
        <input
            autoFocus
            type="text"
            placeholder="Username"
            required
            id="username"
            name="username"
            onChange={handlechangedetails}
            className="signup-input"
          />
          <input
            autoFocus
            type="email"
            placeholder="Email"
            required
            id="email"
            name="email"
            // value={text}
            onChange={handlechangedetails}
            className="signup-input"
          />
         
          <input
            autoFocus
            type="password"
            placeholder="Password"
            required
            id="password"
            name="password"
            // value={pass}
            onChange={handlechangedetails}   
            className="signup-input"
          />
           <input
            autoFocus
            type="Number"
            placeholder="Mobile Number"
            required
            id="phoneNumber"
            name="phoneNumber"
            maxLength = "10"
            // value={number}
            onChange={handlechangedetails}
            className="signup-input"
          />

          <button
            type="submit"
            className="signup-btn"
            onClick={handleSubmit}
          >
            Sign up
          </button>
        </form>
      </div>

      <div className="login-area">
        <p> Have an account </p>
        <Link to="/login"> Log in </Link>
      </div>
    </div>
  );
};

export default SignUp;
