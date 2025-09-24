"use client";
import React, { useState } from "react";
import "./page.css";

export default function DonatePage() {
  const [donations, setDonations] = useState([
    {
      id: "DN001",
      title: "Data Structures and Algorithms",
      author: "Mark Allen Weiss",
      img: "/dsa.jpg",
      donor: "Ravi Kumar",
      college: "IIT Bombay",
      condition: "Good",
      status: "Available",
    },
    {
      id: "DN002",
      title: "Physics for Scientists and Engineers",
      author: "Raymond Serway",
      img: "/physics.jpg",
      donor: "Meera Sharma",
      college: "Delhi University",
      condition: "Like New",
      status: "Claimed",
    },
  ]);

  return (
    <div className="donate-page">
      <h2>Donate Books</h2>
      <p className="subtitle">
        Give your old books a new life by donating them to fellow students.
      </p>

      <div className="donation-list">
        {donations.map((book) => (
          <div key={book.id} className="donation-card">
            <img src={book.img} alt={book.title} />

            <div className="donation-info">
              <h4>{book.title}</h4>
              <p>{book.author}</p>
              <p className="donor">
                Donated by <b>{book.donor}</b> ({book.college})
              </p>
              <p className="condition">Condition: {book.condition}</p>

              <span
                className={`status ${book.status.toLowerCase()}`}
              >
                {book.status}
              </span>

              {book.status === "Available" && (
                <button className="claim-btn">Claim Book</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
