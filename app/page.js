import "./page.css"
import Link from "next/link";


export default function HomePage() {
  return (
    <div className="home">
      
      <img src="/logo.png" alt="BookCycle Logo" className="logo" />

      
      <h1 className="title">BookCycle</h1>
      <p className="subtitle">Your Student Book Marketplace</p>

      
      <div className="features">
        
        <div className="card">
          <div className="icon">📘</div>
          <h2>Buy & Sell</h2>
          <p>Find affordable textbooks from fellow students</p>
        </div>

        <div className="card">
          <div className="icon">🔄</div>
          <h2>Exchange</h2>
          <p>Trade books you no longer need</p>
        </div>

        <div className="card">
          <div className="icon">👥</div>
          <h2>Community</h2>
          <p>Connect with students from your college</p>
        </div>

      </div>
       <Link href="/dashboard" className="btn">Get Started →</Link>
       <Link href="/Login" className="btn1">Login</Link>
      
      <p className="helllo">Join thousands of students saving money on textbooks</p>
      
    </div>
  )
}



