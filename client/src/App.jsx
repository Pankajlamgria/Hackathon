import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Login, SignUp, Layout, Home, Search, Profile } from "./components";
import { BrowserRouter as Router } from "react-router-dom";
import LetztalkState from "./context/LetztalkState";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <LetztalkState>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/search" element={<Search />} />
            {/* <Route path="/FriendsActive" element={<FriendsActive />} /> */}
            <Route path="/Profile" element={<Profile />} />
          </Route>

        </Routes>
      </Router>
      </LetztalkState>
    </div>
  );
};

export default App;
