import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Notification } from "./components/Notification/Notification";
import Starter from "./components/Starter/Starter";
import { Login } from "./components/Login/Login";
import { useState, useEffect } from "react";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [userCount, setUserCount] = useState(0); // Initialize user count

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setIsLoggedIn(true);
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setUserData(null);
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} userData={userData} handleLogout={handleLogout} />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Starter  userCount={userCount} isLoggedIn={isLoggedIn}/>} />
            <Route path="/login" element={<Login setUserData={setUserData} setIsLoggedIn={setIsLoggedIn} setUserCount={setUserCount} userCount={userCount} />} />
 
            <Route
              path="/about"
              element={
               
                  <About userCount={userCount} />
                
              }
            />
            <Route
              path="/services"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Services />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Notification />
        </div>
      </div>
    </Router>
  );
}

export default App;
