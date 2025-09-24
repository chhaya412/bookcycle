"use client";
import Navbar from "../../components/Navbar/page";
import "./page.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


const Dashboard = () => {
  const [search,setsearch]=useState("")
  const filter_btn = ()=>{
    e.preventDefault();
    console.log(search)
  }
  
  return (

    <div className="dashboard">

 Top Bar 
  <div class="top-bar">
    <div class="logo">
      <span class="logo-circle">BC</span>
      <div>
        <h2>BookCycle</h2>
        <p>Delhi University</p>
      </div>
    </div>
    <div class="search-section">
      <input type="text" placeholder="Search books, authors, courses..." onChange={(e)=>setsearch(e.target.value)} />
      <button class="filter-btn" onClick={filter_btn}>⚙️</button>
    </div>
    <div class="icons">
      <span>🔔</span>
    </div>
  </div>

  Tabs 
  <div class="tabs">
    <button class="tab active">🛒 Buy Books</button>
    <Link href='/exchange'>
    <button class="tab">🔄 Exchange</button>
    </Link>
    <Link href='/donate'>
    <button class="tab">🎁 Donate</button>
    </Link>
  </div>

      <Navbar />
      <div className="stats">
        <div className="stat-card blue">
          <h2>2.4k+</h2>
          <p>Books Available</p>
        </div>
        <div className="stat-card green">
          <h2>450+</h2>
          <p>Students</p>
        </div>
        <div className="stat-card teal">
          <h2>₹15k</h2>
          <p>Saved This Month</p>
        </div>
      </div>
      <div className="section-header">
        <h3>Available Books</h3>
        <a href="#">View all</a>
      </div>
      <div className="book-list">
        <div className="book-card">
          <Image src="/math.jpg" alt="Math Book" width={100} height={150} />
          <h4>Advanced Mathematics for Engineers</h4>
          <p>by Dr. Sarah Chen</p>
          <div className="price-distance">
            <span className="price">₹450</span>
            <span className="distance">0.5 km</span>
          </div>
          <div className="user-rating">
            <span>Rahul Sharma, IIT Delhi</span>
            <span>⭐ 4.8</span>
          </div>
        </div>
        <div className="book-card">
          <img src="/psychology.jpg" alt="Psychology" />
          <div className="book-info">
            
          <h4>Introduction to Psychology</h4>
          <p>by Prof. Michael Johnson</p>
          <div className="price-distance">
            <span className="price">₹320</span>
            <span className="distance">1.2 km</span>
          </div>
          <div className="user-rating">
            <span>Priya Patel, DU North Campus</span>
            <span>⭐ 4.6</span>
          </div>
          </div>
        </div>
        <div className="book-card">
          <img src="/algorithm.jpeg" alt="Algorithms" />
          <h4>Data Structures & Algorithms</h4>
          <p>by Dr. Emily Rodriguez</p>
          <div className="price-distance">
            <span className="price">₹580</span>
            <span className="distance">0.8 km</span>
          </div>
          <div className="user-rating">
            <span>Arjun Kumar, IIT Delhi</span>
            <span>⭐ 4.9</span>
          </div>
        </div>
      </div>
      <div className="community-section">
        <h3>Join the Community</h3>
        <p>Share notes, ask questions, and connect with fellow students</p>
        <Link href='/community'>
        <button className="community-btn">Explore Community</button>
        </Link>
      </div>
      <div className="bottom-nav">
        <div className="nav-item">🏠 <span>Home</span></div>
        <Link href='/search'>
        <div className="nav-item">🔍 <span>Search</span></div>
        </Link>
        <Link href= '/sales'>
        <div className="nav-item">➕ <span>Sell</span></div>
        </Link>
        <Link href='/order'>
        <div className="nav-item">📦 <span>Orders</span></div>
        </Link>
        <Link href='/profile'>
        <div className="nav-item">👤 <span>Profile</span></div>
        </Link>
      </div>
    </div>
  );
};
export default Dashboard;
