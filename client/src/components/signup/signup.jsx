import "./signup.scss";
import { useState } from "react";
import letzTalk from "../../assets/letztalk-white.png";
import { Link } from "react-router-dom";


const SignUp = () => {
  const [text, setText] = useState("");
  const [pass, setPass] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("he");

    const userNumber = parseInt(number);
    // Post the data
  };

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
            type="email"
            placeholder="Email"
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="signup-input"
          />
          <input
            autoFocus
            type="text"
            placeholder="Mobile Number"
            required
            maxLength = "10"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="signup-input"
          />
          <input
            autoFocus
            type="password"
            placeholder="Password"
            required
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="signup-input"
          />

          <button
            type="submit"
            className="signup-btn"
            onClick={() => console.log("hda")}
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
