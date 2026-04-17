import React from 'react';
import { Heart } from 'lucide-react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            Parvesh<span>.</span>
          </div>

          <div className="social-links">
            <a href="https://github.com/Parvesh13" className="social-link" aria-label="GitHub">
              <FiGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/parvesh13/" className="social-link" aria-label="LinkedIn">
              <FiLinkedin size={20} />
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <FiTwitter size={20} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Parvesh. All rights reserved.</p>
          <p className="made-with">

          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
