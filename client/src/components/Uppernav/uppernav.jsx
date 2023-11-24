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
        <h4 > HEllo </h4>
      <DarkMode />
      {/* <Profile /> */}
    </div>
  );
};

export default Uppernav;
