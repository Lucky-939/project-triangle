import React, { useState } from 'react';
import './ProjectSale.css';
import { useProjects} from '../context/ProjectContext'; 
import { useNavigate } from 'react-router-dom';

const ProjectSale = () => {
  const { addProject } = useProjects();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [materials, setMaterials] = useState({
    code: { files: [], price: '' },
    ppt: { file: null, price: '' },
    survey: { file: null, price: '' },
    docs: { file: null, price: '' },
    report: { file: null, price: '' },
    video: { file: null, price: '' },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      title,
      abstract: null, // optional abstract
      materials,
    };

    addProject(newProject);
    navigate('/explore'); // go to explore after submission
  };

  return (
    <div className="project-sale-container">
      <h1> Upload Your Project for Sale</h1>

      <form className="project-form" onSubmit={handleSubmit}>
        {/* Title */}
        <div className="form-group">
          <label>Project Title:</label>
          <input
            type="text"
            placeholder="Enter your project title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Abstract Upload + Generate */}
        <div className="form-group row-align">
          <div className="half-width">
            <label>Abstract File (Optional):</label>
            <input type="file" accept=".pdf,.doc,.docx" />
          </div>
          <div className="half-width align-bottom">
            <button type="button" className="generate-btn">
              ✨ Generate Abstract with AI
            </button>
          </div>
        </div>

        {/* Materials Upload Section */}
        <div className="supplementary-section">
          <h3> Materials (Add Price)</h3>

          {/* Code Folder */}
          <div className="supplementary-item">
            <div className="flex-1">
              <label>Code Folder:</label>
              <input
                type="file"
                webkitdirectory="true"
                mozdirectory="true"
                directory=""
                onChange={(e) =>
                  setMaterials({
                    ...materials,
                    code: {
                      ...materials.code,
                      files: Array.from(e.target.files),
                    },
                  })
                }
              />
            </div>
            <div className="price-container">
              <label>Price (₹):</label>
              <input
                type="number"
                placeholder="e.g. 500"
                className="price-input"
                value={materials.code.price}
                onChange={(e) =>
                  setMaterials({
                    ...materials,
                    code: { ...materials.code, price: e.target.value },
                  })
                }
              />
            </div>
          </div>

          {/* Other Materials */}
          {[
            { key: 'ppt', label: 'PPT' },
            { key: 'survey', label: 'Literature Survey' },
            { key: 'docs', label: 'Documentation' },
            { key: 'report', label: 'Final Report' },
            { key: 'video', label: 'Setup Video' },
          ].map(({ key, label }) => (
            <div className="supplementary-item" key={key}>
              <div className="flex-1">
                <label>{label} File:</label>
                <input
                  type="file"
                  accept="application/pdf,video/*,.doc,.docx,.ppt,.pptx"
                  onChange={(e) =>
                    setMaterials({
                      ...materials,
                      [key]: {
                        ...materials[key],
                        file: e.target.files[0],
                      },
                    })
                  }
                />
              </div>
              <div className="price-container">
                <label>Price (₹):</label>
                <input
                  type="number"
                  placeholder="e.g. 200"
                  className="price-input"
                  value={materials[key].price}
                  onChange={(e) =>
                    setMaterials({
                      ...materials,
                      [key]: {
                        ...materials[key],
                        price: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>
          ))}
        </div>

        <button type="submit" className="submit-btn">Submit Project</button>
      </form>
    </div>
  );
};

export default ProjectSale;