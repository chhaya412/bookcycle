"use client";
import "./page.css"; 
import { useState } from "react";

const AddBook = () => {

    const [image, setImage] = useState(null);

    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        setImage(URL.createObjectURL(file));
      }
    };

        

  return (
    <div className="add-book-container">
    <div className="photo-upload-container">
      <h3>📷 Book Photos</h3>
      <label className="upload-box">
        {image ? (
          <img src={image} alt="Book Preview" className="preview" />
        ) : (
          <div className="placeholder">
            <span className="camera-icon">📷</span>
            <p>Add Photo</p>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={handleImageUpload}
        />
      </label>
    </div>
  );

  

  
  
  <h1>📚 Add Book</h1>

  {/* Book Details */}
  <div className="card">
    <h2>📖 Book Details</h2>
    <input type="text" placeholder="Enter book title" />
    <input type="text" placeholder="Enter author name" />
    <input type="text" placeholder="Edition (e.g., 5th Edition)" />
    <input type="text" placeholder="ISBN (e.g., 978-0123456789)" />
    <select>
      <option>Select condition</option>
      <option>New</option>
      <option>Like New</option>
      <option>Used</option>
      <option>Old</option>
    </select>
    <textarea placeholder="Describe the book condition..."></textarea>
  </div>

  
  <div className="card">
    <h2>📂 Subjects</h2>
    <div className="subjects">
      <span>Mathematics</span>
      <span>Physics</span>
      <span>Chemistry</span>
      <span>Biology</span>
      <span>Computer Science</span>
      <span>Engineering</span>
      <span>Psychology</span>
      <span>History</span>
    </div>
  </div>

  {/* Pricing */}
  <div className="card">
    <h2>💰 Pricing & Options</h2>
    <input type="number" placeholder="Enter price in ₹" />
    <div className="options">
      <label>
        <input type="checkbox" /> Open to exchange
      </label>
      <label>
        <input type="checkbox" /> Available for donation
      </label>
    </div>
  </div>

  {/* Location */}
  <div className="card">
    <h2>📍 Location</h2>
    <input type="text" placeholder="e.g., Delhi University" />
    <input type="text" placeholder="e.g., North Campus, Hostel Block A" />
  </div>

  {/* Button */}
  <button className="submit-btn">List Your Book</button>

  {/* Bottom Navigation */}
  {/* <div className="bottom-nav">
    <button>🏠 <span>Home</span></button>
    <button>🔍 <span>Search</span></button>
    <button className="active">➕ <span>Sell</span></button>
    <button>📦 <span>Orders</span></button>
    <button>👤 <span>Profile</span></button>
  </div> */}
</div>

)};

export default AddBook;
