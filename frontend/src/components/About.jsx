import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="about-grid">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src="/parvesh.jpg" alt="Parvesh Mehla" className="profile-image" />
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I’m Parvesh — a Data & Business Analyst skilled in Java development and Cloud technologies, driven by curiosity, problem-solving, and a strong interest in turning data into meaningful insights.

              I enjoy analyzing problems, identifying patterns, and building structured solutions that help businesses make smarter decisions. With a foundation in computer science, hands-on experience in Java development, cloud computing, and UI/UX, I bring a well-rounded technical and user-focused perspective to problem-solving.

              Beyond technical skills, I’m a strong communicator and team player who enjoys leading initiatives, organizing ideas, and presenting concepts clearly to diverse audiences. I believe great analysis isn’t just about numbers — it’s about telling the story behind them and driving real impact.
            </p>
            <p>
              Currently seeking opportunities in Business Analyst / Data Analyst / Product roles where I can learn, contribute, and grow while solving real-world problems.
            </p>

            <div className="about-stats">
              <div className="stat">
                <h3>1+</h3>
                <span>Years Experience</span>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <span>Projects Completed</span>
              </div>
              {/* <div className="stat">
                <h3>100%</h3>
                <span></span>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
