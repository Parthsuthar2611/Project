import "./HomePage.css";

const HomePage = () => {
    return (
        <div className="home-container">
            <header className="hero-section">
                <img src="/images/hero-image.jpeg" alt="MaterialCrafts" className="hero-image" />
                <h1>Welcome to MaterialCrafts</h1>
                <p>Your one-stop shop for premium materials and custom designs.</p>
                <a href="/materials" className="cta-button">Explore Materials</a>
            </header>

            <section className="features">
                <div className="feature-box">
                    <img src="/images/materials.jpg" alt="Materials" className="feature-image" />
                    <h2>High-Quality Materials</h2>
                    <p>We provide top-quality MS, SS, plywood, ACP, and metal sheets.</p>
                </div>
                <div className="feature-box">
                    <img src="/images/designs.jpg" alt="CNC Designs" className="feature-image" />
                    <h2>Custom CNC Designs</h2>
                    <p>Get beautifully crafted designs on your chosen material.</p>
                </div>
                <div className="feature-box">
                    <img src="/images/order.jpg" alt="Easy Ordering" className="feature-image" />
                    <h2>Easy Online Ordering</h2>
                    <p>Select materials, add designs, and order with just a few clicks.</p>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
