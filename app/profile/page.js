import React from "react";
import "./page.css";
import Link from "next/link";

export default function ProfileDashboard() {
  const stats = [
    { label: "Books Listed", value: 12 },
    { label: "Books Sold", value: 8 },
    { label: "Exchanged", value: 3 },
    { label: "Credits", value: "₹450" },
  ];

  const activities = [
    { title: 'Sold "Advanced Mathematics"', when: "2 days ago" },
    { title: 'Listed "Data Structures"', when: "5 days ago" },
    { title: 'Exchanged "Physics Textbook"', when: "1 week ago" },
  ];

  return (
    <div className="dashboard">
      {/* Profile Header */}
      <div className="profile-header">
        <div className="avatar">PS</div>
        <div className="profile-info">
          <h1 className="name">Priya Sharma</h1>
          <p className="university">Delhi University · Computer Science</p>
          <p className="year">3rd Year · Joined March 2024</p>
          <div className="rating">★ 4.7 (18 reviews)</div>
          <div className="contact">
            <p>North Campus, Delhi</p>
            <p>priya.sharma@du.ac.in</p>
            <p>+91 98765 43210</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="stats">
        {stats.map((s) => (
          <div key={s.label} className="stat-card">
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <div className="achievements">
        <span className="badge green">Top Seller</span>
        <span className="badge blue">Trusted Member</span>
        <span className="badge yellow">Book Lover</span>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button className="tab active">My Listings</button>
        <Link href="/wishlist">
        <button className="tab">Wishlist</button>
        </Link>
      </div>


      {/* Recent Activity */}
      <div className="recent">
        <h2>Recent Activity</h2>
        <ul>
          {activities.map((a, idx) => (
            <li key={idx} className="activity">
              <span>{a.title}</span>
              <small>{a.when}</small>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="cta">
        <p>Level Up Your Profile</p>
        <small>
          Complete your profile and earn more badges to build trust with other
          students
        </small>
        <button className="btn">Complete Profile</button>
      </div>
    </div>
  );
}
