import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">SocialRise</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Blog</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
