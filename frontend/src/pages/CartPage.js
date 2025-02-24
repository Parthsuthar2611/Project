import { useCart } from "../context/CartContext";
import "./CartPage.css";

const CartPage = () => {
    const { cart, removeFromCart, clearCart } = useCart();

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
    };

    return (
        <div className="cart-container">
            <h1>Shopping Cart 🛒</h1>

            {cart.length === 0 ? (
                <p className="empty-cart">Your cart is empty.</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cart.map((item, index) => (
                            <div key={index} className="cart-item">
                                <img src={item.materialImage} alt={item.material} />
                                <div className="cart-item-info">
                                    <h3>{item.material}</h3>
                                    <p>Size: {item.width} x {item.height} inches</p>
                                    <p>Price: ₹{item.price}</p>
                                    <button className="remove-btn" onClick={() => removeFromCart(index)}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h2>Total: ₹{getTotalPrice()}</h2>
                        <button className="checkout-btn" onClick={() => alert("Proceeding to checkout!")}>
                            Proceed to Checkout
                        </button>
                        <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;
