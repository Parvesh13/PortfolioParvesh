import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import './Experience.css';

const experienceData = [
  {
    type: 'work',
    title: 'Core Team Member',
    organization: 'Google Devlopers Group On Campus',
    date: '2025 - Present',
    description: 'Contributing to building a strong developer community through events that foster learning and collaboration. '
  },
  {
    type: 'work',
    title: 'Lead Graphic Designer',
    organization: 'Google Devlopers Group On Campus',
    date: '2024 - 2025',
    description: 'Led visual branding and creative direction for major developer events and campaigns. '
  },
  {
    type: 'education',
    title: 'BE in Computer Science',
    organization: 'Chitkara University',
    date: '2023 - 2027',
    description: 'Specialized in web technologies and software engineering.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience & Education
        </motion.h2>

        <div className="timeline">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="timeline-icon">
                {item.type === 'work' ? <Briefcase size={20} /> : <GraduationCap size={20} />}
              </div>
              <div className="timeline-content">
                <span className="timeline-date">{item.date}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <h4 className="timeline-org">{item.organization}</h4>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
