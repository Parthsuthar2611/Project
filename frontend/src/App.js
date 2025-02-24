import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MaterialsPage from "./pages/MaterialsPage";
import DesignsPage from "./pages/DesignsPage";
import CartPage from "./pages/CartPage";
import BuyerLoginPage from "./pages/BuyerLoginPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminPage from "./pages/AdminPage";
import { CartProvider } from "./context/CartContext"; 


function App() {
    return (
        <CartProvider>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/materials" element={<MaterialsPage />} />
                <Route path="/designs" element={<DesignsPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/login" element={<BuyerLoginPage />} />
                <Route path="/admin" element={<AdminLoginPage />} />
                <Route path="/admin/dashboard" element={<AdminPage />} />
                
            </Routes>
        </Router>
        </CartProvider>
    );
}

export default App;
