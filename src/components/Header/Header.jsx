import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";   // <-- FIXED

export default function Header() {
  return (
    <header className="header">
      <nav className="container-fluid py-3 d-flex align-items-center justify-content-between">

        {/* LEFT LINKS */}
        <div className="d-flex gap-4 nav-links">
          <Link to="/about">About us</Link>
          <Link to="/menu">Our menu</Link>
        </div>

        {/* CENTER LOGO */}
        <div className="logo-container text-center">
          <img src={logo} className="logo-img" alt="MAK drinks" />
        </div>

        {/* RIGHT LINKS */}
        <div className="d-flex gap-4 nav-links">
          <Link to="/reservations">Reservations</Link>
          <Link to="/contact">Contact us</Link>
        </div>
      </nav>
    </header>
  );
}
