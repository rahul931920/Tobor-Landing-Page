import React from "react";

export default function Nav() {
  return (
    <div style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
      {/* Navigation Bar */}
      <nav
        style={{
          backgroundColor: "black",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <div style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>
          EV Charger
        </div>

        {/* Navigation Links */}
        <div style={{ display: "flex", gap: "20px" }}>
          <a
            href="#products"
            style={{ color: "white", textDecoration: "none", fontSize: "16px" }}
          >
            Products
          </a>
          <a
            href="#charging-solutions"
            style={{ color: "white", textDecoration: "none", fontSize: "16px" }}
          >
            Charging Solutions
          </a>
          <a
            href="#company"
            style={{ color: "white", textDecoration: "none", fontSize: "16px" }}
          >
            Company
          </a>
          <a
            href="#about"
            style={{ color: "white", textDecoration: "none", fontSize: "16px" }}
          >
            About Us
          </a>
        </div>
      </nav>

     
      {/* <div
        id="products"
        style={{ padding: "50px", textAlign: "center", backgroundColor: "#f5f5f5" }}
      >
        <h1>Welcome to EV Charger Products</h1>
        <p>Explore our range of EV chargers and solutions.</p>
      </div>

      <div
        id="charging-solutions"
        style={{ padding: "50px", textAlign: "center", backgroundColor: "#eaeaea" }}
      >
        <h2>Charging Solutions</h2>
        <p>
          Discover our innovative EV charging solutions for homes, businesses, and public
          spaces.
        </p>
      </div>

      <div
        id="company"
        style={{ padding: "50px", textAlign: "center", backgroundColor: "#f5f5f5" }}
      >
        <h2>About the Company</h2>
        <p>Learn more about our mission to promote sustainable mobility.</p>
      </div>

      <div
        id="about"
        style={{ padding: "50px", textAlign: "center", backgroundColor: "#eaeaea" }}
      >
        <h2>About Us</h2>
        <p>We aim to make EV charging accessible and efficient for everyone.</p>
      </div> */}
    </div>
  );
}
