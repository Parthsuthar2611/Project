import { useState } from "react";
import { useCart } from "../context/CartContext";
import "./MaterialsPage.css";

const MaterialsPage = () => {
    const { addToCart } = useCart(); // Use cart context
    const [selectedMaterial, setSelectedMaterial] = useState(null);
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");

    // Dummy materials (Replace with API data)
    const materials = [
        { id: 1, name: "Mild Steel", pricePerSqFt: 500, image: "/images/ms.jpg" },
        { id: 2, name: "Stainless Steel", pricePerSqFt: 700, image: "/images/ss.jpg" },
        { id: 3, name: "Plywood", pricePerSqFt: 300, image: "/images/plywood.jpg" },
    ];

    const handleAddToCart = () => {
        if (selectedMaterial && width && height) {
            const area = (parseFloat(width) * parseFloat(height)) / 144; // Convert inches to square feet
            const price = area * selectedMaterial.pricePerSqFt;

            const cartItem = {
                material: selectedMaterial.name,
                materialImage: selectedMaterial.image,
                width,
                height,
                price: price.toFixed(2),
            };

            addToCart(cartItem);
            alert("Material added to cart! 🛒");
        } else {
            alert("Please select a material and enter size.");
        }
    };

    return (
        <div className="materials-container">
            <h1>Select Material</h1>

            <div className="materials-section">
                <h2>Available Materials</h2>
                <div className="materials-list">
                    {materials.map(material => (
                        <div 
                            key={material.id} 
                            className={`material-item ${selectedMaterial?.id === material.id ? "selected" : ""}`} 
                            onClick={() => setSelectedMaterial(material)}
                        >
                            <img src={material.image} alt={material.name} />
                            <p>{material.name}</p>
                            <p>₹{material.pricePerSqFt}/sq ft</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Input for Size */}
            <div className="size-inputs">
                <label>Enter Size (in inches):</label>
                <input 
                    type="number" 
                    placeholder="Width" 
                    value={width} 
                    onChange={(e) => setWidth(e.target.value)} 
                />
                <input 
                    type="number" 
                    placeholder="Height" 
                    value={height} 
                    onChange={(e) => setHeight(e.target.value)} 
                />
            </div>

            {/* Display Price */}
            {selectedMaterial && width && height && (
                <div className="price-display">
                    <h3>Estimated Price: ₹{((parseFloat(width) * parseFloat(height)) / 144 * selectedMaterial.pricePerSqFt).toFixed(2)}</h3>
                </div>
            )}

            {/* Add to Cart Button */}
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
                Add to Cart
            </button>
        </div>
    );
};

export default MaterialsPage;
