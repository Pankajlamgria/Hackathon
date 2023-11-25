import "./uppernav.scss";
import  { useState, useEffect } from "react"
import DarkMode  from '../Darkmode/DarkMode'

const Uppernav = () => {
  const [text, setText] = useState("");

  return (
    <div className = "uppernav">
      <input
        type="search"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
        <h4 >LetzConnect</h4>
      <DarkMode />
    </div>
  );
};

export default Uppernav;
