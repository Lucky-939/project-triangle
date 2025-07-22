import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import FeaturedProjects from './pages/FeaturedProjects';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register'; 
import FreelancerHome from './pages/FreelancerHome';
import ClientForm from './pages/ClientForm';
import FreelancerPage from './pages/FreelancerPage';
import ProposalPage from './pages/ProposalPage';
import ProjectSale from './pages/ProjectSale';
import ExploreProjects from './pages/ExploreProjects';
import { ProjectProvider } from './context/ProjectContext'; 

function App() {
  return (
    <ProjectProvider> 
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <SearchBar />
                <FeaturedProjects />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> 
          <Route path="/freelance" element={<FreelancerHome />} />
          <Route path="/freelance/client" element={<ClientForm />} />
          <Route path="/freelance/freelancer" element={<FreelancerPage />} />
          <Route path="/proposal/:projectId" element={<ProposalPage />} />
          <Route path="/post-project" element={<ProjectSale />} />
          <Route path="/explore" element={<ExploreProjects />} />
        </Routes>
        <Footer />
      </Router>
    </ProjectProvider>
  );
}

export default App;