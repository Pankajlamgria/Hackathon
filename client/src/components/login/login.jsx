import { useState } from "react";
import letzTalk from "../../assets/letztalk-white.png";
import "./login.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";


const Login = () => {
  const [logindetial,setlogindetail]=useState({email:"",password:""});
  const host="http://localhost:8000";
  const navigate=useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response=await fetch(`${host}/api/auth/login`,{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({email:logindetial.email,password:logindetial.password}),
    });
    const logninres=await response.json();
    if(logninres.success){
      localStorage.setItem('letztalktoken',logninres.authtoken);
      localStorage.setItem("myemai",logindetial.email);
      localStorage.setItem("myImgurl",logninres.finduser.profileurl);
      localStorage.setItem("username",logninres.finduser.username);
      
      console.log(logninres);
      navigate('/');
      // window.location.reload(false);
    }
    else{
      alert(logninres.error);
    }
  };
  const handledetailschange=(e)=>{
    setlogindetail({...logindetial,[e.target.name]:e.target.value});
  }

  return (
    <div className="login-page">
      <div className="login">
        <div>
          <img
            src={letzTalk}
            alt="Logo"
            width="200px"
            height="auto"
            className="login-logo"
          />
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            autoFocus
            type="email"
            placeholder="Phone Number, username or email"
            required
            id="email"
            name="email"
            // value={text}
            onChange={handledetailschange}
            className="login-input"
          />
          <input
            autoFocus
            type="password"
            placeholder="Password"
            required
            id="password"
            name="password"
            // value={pass}
            onChange={handledetailschange}
            className="login-input"
          />

          <button
            type="submit"
            className="login-btn"
            onClick={() => console.log("hda")}
          >
            Login
          </button>
        </form>
      </div>

      <div className="signup-area">
        <p> Don't have a account </p>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
