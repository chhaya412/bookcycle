"use client";
import React, { useState } from "react";
import "./page.css";

export default function CommunityPage() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "Rahul Sharma",
      college: "IIT Delhi",
      text: "Does anyone have 'Introduction to AI' book? Looking for a used copy.",
      time: "2h ago",
    },
    {
      id: 2,
      user: "Priya Patel",
      college: "DU North Campus",
      text: "Selling 'Physics for Engineers' at ₹300. DM if interested!",
      time: "5h ago",
    },
  ]);

  const [newPost, setNewPost] = useState("");

  const handlePost = () => {
    if (newPost.trim() === "") return;
    const newEntry = {
      id: posts.length + 1,
      user: "You",
      college: "Your College",
      text: newPost,
      time: "Just now",
    };
    setPosts([newEntry, ...posts]);
    setNewPost("");
  };

  return (
    <div className="community-page">
      <h2>Community</h2>

      {/* Create Post */}
      <div className="create-post">
        <textarea
          placeholder="Share something with the community..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button onClick={handlePost}>Post</button>
      </div>

      {/* Posts Feed */}
      <div className="posts-feed">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <div className="avatar">{post.user.charAt(0)}</div>
              <div>
                <h4>{post.user}</h4>
                <p className="college">{post.college}</p>
              </div>
              <span className="time">{post.time}</span>
            </div>
            <p className="post-text">{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
