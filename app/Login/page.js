"use client";
import React, { useState } from "react";
import "./page.css";
import Link from "next/link";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login details:", form);
    alert("Login Successful (dummy)");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login</h2>
        <p className="subtitle">Welcome back! Please login to continue.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
           <Link href ="/dashboard">
          <button type="submit" className="login-btn">Login</button>
            </Link>
            
        </form>
        <Link href="/register">
        <p className="register-text">
           
            
          Don’t have an account? <a href="/register">Register</a>
            
        </p>
        </Link>
      </div>
    </div>
  );
}
