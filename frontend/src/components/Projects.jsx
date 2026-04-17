import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import './Projects.css';

const fallbackProjects = [
  {
    _id: '1',
    title: 'NyayaMitra',
    description: 'NyayaMitra is an AI-powered chatbot built on Retrieval-Augmented Generation (RAG), designed to make Indian legal knowledge accessible, understandable, and trustworthy for every citizen.',
    tags: ['React', 'Node.js', 'MongoDB', 'Python'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Parvesh13/NyayaMitra'
  },
  {
    _id: '2',
    title: 'House-Rental-Portal-SpringBoot',
    description: 'Built with Spring Boot (backend) and React (frontend), this demo version showcases the core functionality of a house rental portal without the complexity of authentication and authorization.',
    tags: ['Spring Boot', 'React', 'jwt', 'mysql'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Parvesh13/House-Rental-Portal-SpringBoot'
  },
  {
    _id: '3',
    title: 'Spotify Data Analysis Dashboard',
    description: 'Analyzed Spotify data using Excel & Power BI to identify listening trends.',
    tags: ['Excel', 'Power BI', 'Data Analysis'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Parvesh13/Spotify-Data-Analysis-Dashboard'
  }
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const res = await fetch(`${apiBase}/api/projects`);
        const data = await res.json();
        if (data.length > 0) {
          setProjects(data);
        } else {
          setProjects(fallbackProjects);
        }
      } catch (err) {
        console.error('Error fetching projects:', err);
        setProjects(fallbackProjects); // Fallback if API fails
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        {loading ? (
          <div className="loading">Loading projects...</div>
        ) : (
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project._id}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub Repository">
                    <FiGithub size={20} />
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
