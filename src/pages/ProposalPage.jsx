import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProposalPage.css';

const ProposalPage = () => {
  const { projectId } = useParams();

  const [formData, setFormData] = useState({
    name: '',
    message: '',
    expectedBudget: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Proposal submitted:', formData);
    alert('Proposal submitted successfully!');
  };

  return (
    <div className="proposal-container">
      <h2>Submit Proposal for Project #{projectId}</h2>
      <form onSubmit={handleSubmit} className="proposal-form">
        <label>
          Your Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Cover Letter / Message:
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Expected Budget:
          <input
            type="text"
            name="expectedBudget"
            value={formData.expectedBudget}
            onChange={handleChange}
            placeholder="e.g. ₹3000"
            required
          />
        </label>

        <label>
          Attach File (optional):
          <input
            type="file"
            name="file"
            onChange={handleChange}
          />
        </label>

        <button type="submit" className="submit-proposal-btn">
          Submit Proposal
        </button>
      </form>
    </div>
  );
};

export default ProposalPage;