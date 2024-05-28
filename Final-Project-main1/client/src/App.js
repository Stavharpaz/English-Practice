/*import {React, useContext} from 'react';
import { BrowserRouter , Route, Routes  } from 'react-router-dom';
import Home from './Pages/Home/home.js';
import Login from './Pages/Login/login.js';
import Logout from './Pages/Logout/logout.js';
import { AuthContext } from './context/authContext';
import Register from './Pages/Register/register.js';
import "./app.scss"


function App() {
  const {currentUser} = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div className="App">
        <BrowserRouter>
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
*/


import { React, useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home/home.js";
import Login from "./Pages/Login/login.js";
import Logout from "./Pages/Logout/logout.js";
import { AuthContext } from "./context/authContext";
import Register from "./Pages/Register/register.js";
import "./app.scss";
import { ProtectedRoute } from "./ProtectedRoute";

function App() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
