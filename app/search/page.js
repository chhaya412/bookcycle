"use client";
import React, { useState } from "react";
import "./page.css"; 
import Link from "next/link";

export default function SearchPage() {
  const [recent, setRecent] = useState([]);

  const popularSearches = [
    "NCERT",
    "JEE Main",
    "NEET",
    "Gate CSE",
    "Psychology",
    "Mathematics",
    "Physics",
    "Chemistry",
  ];

  const handleSearch = (query) => {
    if (query && !recent.includes(query)) {
      console.log(query)
      setRecent([query, ...recent]);
    }
  };

  return (
    <div className="search-page">
      <h2>Search Books</h2>


      <div className="search-bar">
        <input
          type="text"
          placeholder="Search books, authors, courses..."
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch(e.target.value);
          }}
        />
        <button className="icon-btn">🔍</button>
        <button className="icon-btn">⚙️</button>
      </div>

      
      <div className="popular-searches">
        <h4>📈 Popular Searches</h4>
        <div className="tags">
          {popularSearches.map((tag, i) => (
            
            <span key={i} className="tag" onClick={() => handleSearch(tag)}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      
      <div className="recent-searches">
        <h4>⏱ Recent Searches</h4>
        {recent.length === 0 ? (
          <p>No recent searches</p>
        ) : (
          <ul>
            {recent.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
      
    </div>
  );
}
