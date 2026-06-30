import React, { useState } from 'react';
import './ReportProblem.css';

const ReportProblem = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    category: 'Infrastructure',
    urgency: 'Medium',
    photo: null
  });

  const { title, description, location, category, urgency } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onFileChange = e => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log('Problem reported:', formData);
    alert('Problem reported successfully! Our team will review it soon.');
    // Reset form
    setFormData({
      title: '',
      description: '',
      location: '',
      category: 'Infrastructure',
      urgency: 'Medium',
      photo: null
    });
  };

  return (
    <div className="report-problem-page">
      <div className="report-problem-container">
        <div className="report-header">
          <h1>Report a Community Problem</h1>
          <p>Help make your neighborhood better by reporting issues that need attention</p>
        </div>

        <div className="report-card">
          <form onSubmit={onSubmit} className="report-form">
            <div className="form-row">
              <div className="form-group">
                <label>Problem Title *</label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={onChange}
                  required
                  placeholder="Brief, descriptive title (e.g., 'Pothole on Main Street')"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Description *</label>
                <textarea
                  name="description"
                  value={description}
                  onChange={onChange}
                  required
                  rows="5"
                  placeholder="Please provide detailed information about the problem..."
                ></textarea>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Location *</label>
                <input
                  type="text"
                  name="location"
                  value={location}
                  onChange={onChange}
                  required
                  placeholder="Exact location or address"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Category *</label>
                <select name="category" value={category} onChange={onChange}>
                  <option value="Infrastructure">Roads & Infrastructure</option>
                  <option value="Sanitation">Sanitation & Waste</option>
                  <option value="Safety">Public Safety</option>
                  <option value="Environment">Environment & Parks</option>
                  <option value="Utilities">Water & Utilities</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Urgency Level *</label>
                <select name="urgency" value={urgency} onChange={onChange}>
                  <option value="Low">Low - Minor inconvenience</option>
                  <option value="Medium">Medium - Needs attention</option>
                  <option value="High">High - Serious issue</option>
                  <option value="Critical">Critical - Emergency</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Upload Photo (Optional)</label>
                <div className="file-upload">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={onFileChange}
                    className="file-input"
                  />
                  <div className="upload-placeholder">
                    <span>📷 Click to upload photo</span>
                    <small>Max file size: 5MB</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-submit">
              <button type="submit" className="submit-btn">
                Report Problem
              </button>
              <p className="form-note">
                By submitting this form, you agree to our community guidelines. 
                False reports may be subject to review.
              </p>
            </div>
          </form>
        </div>

        <div className="report-guidelines">
          <h3>Reporting Guidelines</h3>
          <div className="guidelines-list">
            <div className="guideline">
              <span>✅</span>
              <p>Be specific about the location and nature of the problem</p>
            </div>
            <div className="guideline">
              <span>✅</span>
              <p>Include clear photos when possible</p>
            </div>
            <div className="guideline">
              <span>✅</span>
              <p>Choose the appropriate category and urgency level</p>
            </div>
            <div className="guideline">
              <span>✅</span>
              <p>Provide enough detail for officials to understand the issue</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportProblem;