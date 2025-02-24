import { createContext, useContext, useState } from "react";

// Create Cart Context
const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Function to add items to the cart
    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    // ✅ Function to remove items from the cart
    const removeFromCart = (index) => {
        setCart(cart.filter((_, i) => i !== index));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom Hook to Use Cart Context
export const useCart = () => useContext(CartContext);