import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">MaterialCrafts</Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/materials">Only Material</Link></li>
                <li><Link to="/designs">Design Selection</Link></li>
                <li><Link to="/cart">Cart</Link></li>

                {user ? (
                    <>
                        <li><span className="user-role">Welcome, {user.role}!</span></li>
                        <li><button className="logout-btn" onClick={logout}>Logout</button></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/login">Buyer Login</Link></li>
                        <li><Link to="/admin">Admin Login</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
