import { useState } from "react";
import letzTalkDark from "../../assets/letztalk-dark.png";
// import { letzTalkWhite } from '../../assets/letxtalk-white.png';

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
        <img src={letzTalkDark} alt="Logo" className="login-logo" />
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

          <button type="submit" onClick={() => console.log("hda")}>
            Login
          </button>
        </form>
      </div>

      <div className="signup">
        <h3> Don't have a account </h3>
        <button className="signup-btn" onClick={() => console.log("hda")}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Login;
