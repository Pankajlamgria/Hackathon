import { useState } from "react";
import letzTalk from "../../assets/letztalk-white.png";
import "./login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("he");
    // Post the data
  };

  const [userCred, setUserCred] = useState("");
  const [userPass, setUserPass] = useState("");
  const [text, setText] = useState("");
  const [pass, setPass] = useState("");

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
            type="text"
            placeholder="Phone Number, username or email"
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="login-input"
          />
          <input
            autoFocus
            type="password"
            placeholder="Password"
            required
            value={pass}
            onChange={(e) => setPass(e.target.value)}
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
