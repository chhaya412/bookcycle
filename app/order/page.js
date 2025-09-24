"use client";
import React, { useState } from "react";
import "./page.css"; // local CSS import

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState("purchases");

  // Dummy data
  const purchaseOrders = [
    {
      id: "ORD001",
      date: "15 Jan 2024",
      title: "Advanced Mathematics for Engineers",
      author: "Dr. Sarah Chen",
      price: "₹450",
      buyer: "Rahul Sharma",
      college: "IIT Delhi",
      delivery: "Meetup: Central Library, IIT Delhi",
      status: "Delivered",
      statusColor: "delivered",
      deliveredOn: "18 Jan 2024",
      img: "/maths.jpg",
    },
    {
      id: "ORD002",
      date: "20 Jan 2024",
      title: "Introduction to Psychology",
      author: "Prof. Michael Johnson",
      price: "₹320",
      buyer: "Priya Patel",
      college: "DU North Campus",
      delivery: "Hostel Block A, Room 215",
      status: "In Transit",
      statusColor: "in-transit",
      expected: "25 Jan 2024",
      trackId: "BK123456789",
      img: "/psychology.jpg",
    },
  ];

  const salesOrders = [
    {
      id: "SALE001",
      date: "10 Jan 2024",
      title: "Data Structures & Algorithms",
      author: "Dr. Emily Rodriguez",
      price: "₹580",
      buyer: "Arjun Kumar",
      college: "NSUT",
      delivery: "Pickup: College Gate",
      status: "Completed",
      statusColor: "delivered",
      deliveredOn: "13 Jan 2024",
      img: "/alogorithm.jpeg",
    },
  ];

  const exchangeOrders = [
    {
      id: "EXCH001",
      date: "05 Jan 2024",
      title: "Engineering Mechanics",
      author: "Prof. Anil Mehta",
      price: "Exchanged",
      buyer: "Rohit Verma",
      college: "IIT Bombay",
      delivery: "Exchanged with ‘Thermodynamics’",
      status: "Completed",
      statusColor: "delivered",
      deliveredOn: "07 Jan 2024",
      img: "/mechanics.jpg",
    },
  ];

  const renderOrders = (orders) => (
    <div className="orders-list">
      {orders.map((order, i) => (
        <div key={i} className="order-card">
          <div className="order-header">
            <span>
              Order <b>#{order.id}</b>
            </span>
            <span>{order.date}</span>
            <span className={`status ${order.statusColor}`}>
              {order.status}
            </span>
          </div>

          <div className="order-body">
            <img src={order.img} alt={order.title} />
            <div className="order-info">
              <h4>{order.title}</h4>
              <p>{order.author}</p>
              <p className="price">{order.price}</p>
              <p className="buyer">
                {order.buyer} - {order.college}
              </p>
              <p className="delivery">{order.delivery}</p>
              {order.deliveredOn && <p>Delivered on {order.deliveredOn}</p>}
              {order.expected && (
                <p>
                  Expected {order.expected} <br /> Track: {order.trackId}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="orders-page">
      <h2>My Orders</h2>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={activeTab === "purchases" ? "active" : ""}
          onClick={() => setActiveTab("purchases")}
        >
          Purchases
        </button>
        <button
          className={activeTab === "sales" ? "active" : ""}
          onClick={() => setActiveTab("sales")}
        >
          Sales
        </button>
        <button
          className={activeTab === "exchanges" ? "active" : ""}
          onClick={() => setActiveTab("exchanges")}
        >
          Exchanges
        </button>
      </div>

      {/* Orders */}
      {activeTab === "purchases" && renderOrders(purchaseOrders)}
      {activeTab === "sales" && renderOrders(salesOrders)}
      {activeTab === "exchanges" && renderOrders(exchangeOrders)}

      {/* Track Order button */}
      <div className="track-btn">
        <button>Track Order</button>
      </div>
    </div>
  );
}
