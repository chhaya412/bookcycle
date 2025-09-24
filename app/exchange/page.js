"use client";
import React, { useState } from "react";
import "./page.css";

export default function ExchangePage() {
  const [exchanges, setExchanges] = useState([
    {
      id: "EX001",
      userBook: {
        title: "Operating System Concepts",
        author: "Silberschatz",
        img: "/os.jpg",
      },
      exchangeFor: {
        title: "Database Management Systems",
        author: "Raghu Ramakrishnan",
        img: "/dbms.jpg",
      },
      user: "Aman Gupta",
      college: "IIT Delhi",
      status: "Pending",
    },
    {
      id: "EX002",
      userBook: {
        title: "Artificial Intelligence",
        author: "Stuart Russell",
        img: "/ai.jpg",
      },
      exchangeFor: {
        title: "Machine Learning",
        author: "Tom Mitchell",
        img: "/ml.jpg",
      },
      user: "Sneha Sharma",
      college: "NIT Trichy",
      status: "Approved",
    },
  ]);

  return (
    <div className="exchange-page">
      <h2>Book Exchange</h2>

      <div className="exchange-list">
        {exchanges.map((ex) => (
          <div key={ex.id} className="exchange-card">
            {/* User Book */}
            <div className="book">
              <img src={ex.userBook.img} alt={ex.userBook.title} />
              <h4>{ex.userBook.title}</h4>
              <p>{ex.userBook.author}</p>
            </div>

            {/* Swap Icon */}
            <div className="swap">⇄</div>

            {/* Exchange For */}
            <div className="book">
              <img src={ex.exchangeFor.img} alt={ex.exchangeFor.title} />
              <h4>{ex.exchangeFor.title}</h4>
              <p>{ex.exchangeFor.author}</p>
            </div>

            {/* User Info */}
            <div className="info">
              <p>
                <b>{ex.user}</b> - {ex.college}
              </p>
              <span className={`status ${ex.status.toLowerCase()}`}>
                {ex.status}
              </span>
              <button className="connect-btn">Connect</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
