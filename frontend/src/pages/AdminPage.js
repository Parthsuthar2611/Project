import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const role = localStorage.getItem("role");
        if (role !== "admin") {
            alert("Access Denied!");
            navigate("/");
        }
    }, [navigate]);

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <p>Manage materials & designs here.</p>
        </div>
    );
};

export default AdminPage;
