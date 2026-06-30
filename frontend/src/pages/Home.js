import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProblems();
  }, []);

  const fetchProblems = async () => {
    try {
      // For now, we'll use mock data since backend isn't ready
      const mockProblems = [
        {
          id: 1,
          title: "Pothole on Main Street",
          description: "Large pothole causing traffic issues near the intersection",
          location: "Downtown",
          category: "Infrastructure",
          status: "Open",
          upvotes: 15,
          downvotes: 2,
          createdAt: new Date()
        },
        {
          id: 2,
          title: "Broken Street Light",
          description: "Street light not working for past 3 days",
          location: "Oak Park",
          category: "Safety",
          status: "In Progress",
          upvotes: 8,
          downvotes: 1,
          createdAt: new Date()
        },
        {
          id: 3,
          title: "Garbage Accumulation",
          description: "Trash hasn't been collected for 5 days",
          location: "Maple Avenue",
          category: "Sanitation",
          status: "Open",
          upvotes: 22,
          downvotes: 3,
          createdAt: new Date()
        },
        {
          id: 4,
          title: "Broken Playground Equipment",
          description: "Swing set damaged and needs repair at Central Park",
          location: "Central Park",
          category: "Parks & Recreation",
          status: "In Progress",
          upvotes: 12,
          downvotes: 1,
          createdAt: new Date()
        }
      ];
      setProblems(mockProblems);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching problems:', error);
      setLoading(false);
    }
  };

  const handleVote = async (id, type) => {
    // For now, we'll just update locally
    const updatedProblems = problems.map(problem => {
      if (problem.id === id) {
        return {
          ...problem,
          upvotes: type === 'upvote' ? problem.upvotes + 1 : problem.upvotes,
          downvotes: type === 'downvote' ? problem.downvotes + 1 : problem.downvotes
        };
      }
      return problem;
    });
    setProblems(updatedProblems);
  };

  if (loading) {
    return <div className="loading">Loading problems...</div>;
  }

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Make Your Community Better</h1>
            <p>Report local issues, collaborate with neighbors, and get problems solved together</p>
            <div className="hero-buttons">
              <Link to="/report" className="btn btn-primary">Report a Problem</Link>
              <Link to="/register" className="btn btn-secondary">Join Your Community</Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="placeholder-image">🏘️</div>
          </div>
        </div>
      </section>

      {/* Problems List Section */}
      <section className="problems-section">
        <div className="container">
          <h2>Recent Community Issues</h2>
          <div className="problems-grid">
            {problems.length === 0 ? (
              <div className="no-problems">
                <p>No problems reported yet. Be the first to report one!</p>
                <Link to="/report" className="btn btn-primary">Report First Problem</Link>
              </div>
            ) : (
              problems.map(problem => (
                <div key={problem.id} className="problem-card">
                  <div className="problem-header">
                    <span className={`status-badge status-${problem.status.toLowerCase().replace(' ', '-')}`}>
                      {problem.status}
                    </span>
                    <span className="category-tag">{problem.category}</span>
                  </div>
                  <div className="problem-content">
                    <h3>{problem.title}</h3>
                    <p className="problem-description">{problem.description}</p>
                    <div className="problem-meta">
                      <span className="location">📍 {problem.location}</span>
                      <span className="date">📅 {new Date(problem.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="problem-actions">
                    <div className="voting">
                      <button 
                        onClick={() => handleVote(problem.id, 'upvote')}
                        className="vote-btn upvote"
                        title="This affects me too"
                      >
                        👍 {problem.upvotes}
                      </button>
                      <button 
                        onClick={() => handleVote(problem.id, 'downvote')}
                        className="vote-btn downvote"
                        title="This doesn't affect me"
                      >
                        👎 {problem.downvotes}
                      </button>
                    </div>
                    <Link to={`/problem/${problem.id}`} className="view-details-btn">
                      View Details
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>127</h3>
              <p>Problems Reported</p>
            </div>
            <div className="stat-card">
              <h3>89</h3>
              <p>Problems Solved</p>
            </div>
            <div className="stat-card">
              <h3>456</h3>
              <p>Active Volunteers</p>
            </div>
            <div className="stat-card">
              <h3>24</h3>
              <p>Local Areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>How It Works</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📝</div>
              <h3>Report Issues</h3>
              <p>Easily report problems in your neighborhood with photos and location details</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Vote & Prioritize</h3>
              <p>Help prioritize which issues need immediate attention</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✅</div>
              <h3>Track Progress</h3>
              <p>See real-time updates on problem resolution status</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section">
        <div className="container">
          <div className="search-box">
            <input 
              type="text" 
              placeholder="Type here to search..." 
              className="search-input"
            />
            <button className="search-btn">Search</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;