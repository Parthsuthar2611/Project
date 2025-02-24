import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const BuyerLoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5000/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (data.success && data.role === "buyer") {
            localStorage.setItem("token", data.token);
            localStorage.setItem("role", data.role);
            navigate("/");
        } else {
            alert("Invalid Buyer Credentials");
        }
    };

    return (
        <div className="login-container">
            <h2>Buyer Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default BuyerLoginPage;
