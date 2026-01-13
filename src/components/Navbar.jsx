import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
    <a href="#contact">
       <img src={logo} alt="Pro Bodyline Gym Logo" className="navbar-logo" />
     </a>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#plans">Plans</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
