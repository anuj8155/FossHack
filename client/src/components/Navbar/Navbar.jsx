import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { DropDown } from "../DropDown/DropDown";
import "./navbar.css";

const Navbar = ({ isLoggedIn, userData, handleLogout }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Logo on the left */}
      <div className="logo-container">
        <NavLink to="/">
          <img src="/omnicast-logo.png" alt="OmniCast Logo" className="logo" />
        </NavLink>
      </div>

      {/* Centered Navigation Links */}
      <ul className="nav-links">
        <motion.li whileHover={{ scale: 1.1, rotateY: 10 }} whileTap={{ scale: 0.9 }}>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1, rotateY: 10 }} whileTap={{ scale: 0.9 }}>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
        </motion.li>
        {isLoggedIn && (
          <motion.li whileHover={{ scale: 1.1, rotateY: 10 }} whileTap={{ scale: 0.9 }}>
            <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>
              Services
            </NavLink>
          </motion.li>
        )}
        {!isLoggedIn && (
          <motion.li whileHover={{ scale: 1.1, rotateY: 10 }} whileTap={{ scale: 0.9 }}>
            <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
              Login
            </NavLink>
          </motion.li>
        )}
      </ul>

      {/* User Avatar on the Right */}
      {isLoggedIn && userData && (
        <motion.div className="avatar-container" onClick={() => setIsDropDownOpen(true)}>
          <img
            src={userData.avatar || "./avatar.png"}
            alt="User Avatar"
            className="user-avatar"
          />
        </motion.div>
      )}

      {/* Dropdown for user profile */}
      {isDropDownOpen && userData && (
        <div className="dropdown-dialog-overlay" onClick={() => setIsDropDownOpen(false)}>
          <div className="dropdown-dialog-content" onClick={(e) => e.stopPropagation()}>
            <DropDown
              fullName={userData?.fullName || "Guest"}
              avatar={userData?.avatar}
              description={userData?.description || "No description available"}
              role={userData?.role || "User"}
              onLogout={handleLogout}
              closeDropDown={() => setIsDropDownOpen(false)}
            />
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
