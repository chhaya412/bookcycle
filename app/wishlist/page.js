"use client";
import React, { useState } from "react";
import "./page.css";

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState([
    {
      id: "W001",
      title: "Clean Code",
      author: "Robert C. Martin",
      price: "₹500",
      img: "/cleancode.jpg",
      seller: "Rohan Verma",
      college: "IIT Bombay",
    },
    {
      id: "W002",
      title: "Data Structures & Algorithms",
      author: "Narasimha Karumanchi",
      price: "₹650",
      img: "/dsa.jpg",
      seller: "Sneha Gupta",
      college: "NIT Trichy",
    },
  ]);

  const removeItem = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div className="wishlist-page">
      <h2>My Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="empty">Your wishlist is empty 💔</p>
      ) : (
        <div className="wishlist-list">
          {wishlist.map((item) => (
            <div key={item.id} className="wishlist-card">
              <img src={item.img} alt={item.title} />
              <div className="wishlist-info">
                <h4>{item.title}</h4>
                <p className="author">{item.author}</p>
                <p className="price">{item.price}</p>
                <p className="seller">
                  {item.seller} - {item.college}
                </p>
                <div className="actions">
                  <button className="buy-btn">Buy Now</button>
                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
