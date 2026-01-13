import { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
  const closeOnScroll = () => setOpen(false);
  window.addEventListener("scroll", closeOnScroll);
  return () => window.removeEventListener("scroll", closeOnScroll);
}, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={menuRef}>
      {/* Logo */}
      <a href="#home" className="logo-wrapper">
        <img src={logo} alt="Pro Bodyline Gym Logo" className="navbar-logo" />
      </a>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Dropdown */}
      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
        <li><a href="#services" onClick={() => setOpen(false)}>Services</a></li>
        <li><a href="#plans" onClick={() => setOpen(false)}>Plans</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
