import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Login, Nav } from "./components"

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Login />

      {/* <Routes> */}
        {/* <Route path="/" element={<Layout />}> */}
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="users" element={<Users />} /> */}
          {/* <Route path="contact" element={</>} /> */}
        {/* </Route> */}
      {/* </Routes> */}
    </div>
  );
};

export default App;
