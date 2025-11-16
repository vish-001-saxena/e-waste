import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Replace with your real endpoint!
  const BLOG_API_URL = "https://jsonplaceholder.typicode.com/posts?_limit=6"; // demo: 6 posts

  useEffect(() => {
    fetch(BLOG_API_URL)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <div className="container navbar-content">
          <h1 className="logo">E-Waste Link</h1>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/features">Features</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <div className="page-section">
        {/* Portal Story */}
        <h2>Awareness & Blogs</h2>
        <p>
          <strong>E-Waste Link</strong> is India’s smart digital solution for accessible, responsible e-waste disposal and recycling. 
          From educating households to tracking the journey of every device, our portal empowers individuals and recyclers to take climate-positive action.
          <br /><br />
          <b>Our Story:</b> Founded to bridge the digital gap in e-waste management, our platform connects people to verified pickups, easy tracking, and honest recycling. Follow our blogs for success stories, recycling tips, and industry news!
        </p>
        <hr style={{margin: "2em 0"}} />

        {/* Blog Cards */}
        <h3 style={{ color: "#249e65", marginBottom: "1.5em"}}>Latest Blog Posts</h3>
        {loading ? (
          <div>Loading blogs...</div>
        ) : (
          <div className="card-grid">
            {blogs.map(blog => (
              <div className="card blog-post" key={blog.id}>
                <h4>{blog.title.length > 38 ? blog.title.slice(0, 38) + '...' : blog.title}</h4>
                <div className="meta">Published Nov 2025</div>
                <p>{blog.body.length > 90 ? blog.body.slice(0, 90) + "..." : blog.body}</p>
                {/* If your real API provides images, add an <img /> here */}
                <a 
                  href={`https://jsonplaceholder.typicode.com/posts/${blog.id}`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#249e65", fontWeight: "bold" }}
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Footer can be included here as desired */}
    </>
  );
}

export default Blog;
