import { useState } from "react";
import { useCart } from "../context/CartContext";
import "./DesignsPage.css";

const DesignsPage = () => {
    const { addToCart } = useCart(); // Use cart context
    const [selectedMaterial, setSelectedMaterial] = useState(null);
    const [selectedDesign, setSelectedDesign] = useState(null);
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");

    // Dummy materials and designs (Replace with API data)
    const materials = [
        { id: 1, name: "Mild Steel", pricePerSqFt: 500, image: "/images/ms.jpg" },
        { id: 2, name: "Stainless Steel", pricePerSqFt: 700, image: "/images/ss.jpg" },
        { id: 3, name: "Plywood", pricePerSqFt: 300, image: "/images/plywood.jpg" },
    ];

    const designs = [
        { id: 1, name: "Floral Pattern", pricePerSqFt: 200, image: "/images/floral.jpg" },
        { id: 2, name: "Geometric Pattern", pricePerSqFt: 250, image: "/images/geometric.jpg" },
        { id: 3, name: "Abstract Art", pricePerSqFt: 300, image: "/images/abstract.jpg" },
    ];

    const handleAddToCart = () => {
        if (selectedMaterial && selectedDesign && width && height) {
            const area = (parseFloat(width) * parseFloat(height)) / 144; // Convert inches to square feet
            const price = area * (selectedMaterial.pricePerSqFt + selectedDesign.pricePerSqFt);

            const cartItem = {
                material: selectedMaterial.name,
                materialImage: selectedMaterial.image,
                design: selectedDesign.name,
                designImage: selectedDesign.image,
                width,
                height,
                price: price.toFixed(2),
            };

            addToCart(cartItem);
            alert("Item added to cart! 🛒");
        } else {
            alert("Please select a material, design, and enter size.");
        }
    };

    return (
        <div className="designs-container">
            <h1>Select Material & Design</h1>

            <div className="selection-grid">
                {/* Materials Section */}
                <div className="materials-section">
                    <h2>Materials</h2>
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

                {/* Designs Section */}
                <div className="designs-section">
                    <h2>Designs</h2>
                    <div className="designs-list">
                        {designs.map(design => (
                            <div 
                                key={design.id} 
                                className={`design-item ${selectedDesign?.id === design.id ? "selected" : ""}`} 
                                onClick={() => setSelectedDesign(design)}
                            >
                                <img src={design.image} alt={design.name} />
                                <p>{design.name}</p>
                                <p>₹{design.pricePerSqFt}/sq ft</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Input for Size */}
            <div className="size-inputs">
                <label>Enter Size (in inches):</label>
                <input type="number" placeholder="Width" value={width} onChange={(e) => setWidth(e.target.value)} />
                <input type="number" placeholder="Height" value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>

            {/* Display Price */}
            {selectedMaterial && selectedDesign && width && height && (
                <div className="price-display">
                    <h3>Estimated Price: ₹{((parseFloat(width) * parseFloat(height)) / 144 * (selectedMaterial.pricePerSqFt + selectedDesign.pricePerSqFt)).toFixed(2)}</h3>
                </div>
            )}

            {/* Add to Cart Button */}
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
                Add to Cart
            </button>
        </div>
    );
};

export default DesignsPage;
