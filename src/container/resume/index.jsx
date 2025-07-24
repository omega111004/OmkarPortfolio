import React, { useEffect } from "react";
import "./resume.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";
import { FiDownload, FiEye } from "react-icons/fi";

const educationDetails = [
  {
    year: "2024–25",
    degree: "B.Sc. in Information Technology",
    institution: "Mumbai University",
  },
];

const certifications = [
  {
    title: "JavaScript Essentials",
    provider: "ITVedant",
    year: "June 2025",
  },
  {
    title: "React Js",
    provider: "ITVedant",
    year: "July 2025",
  },
];

const Resume = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="resume-section" id="resume">
      <div className="resume-header" data-aos="fade-down">
        <h2>Resume</h2>
        <p>A snapshot of my educational background and certifications.</p>
        <div className="resume-buttons">
          <a
            href="/Omkar_Chaudhari_Resume.pdf"
            className="resume-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiEye /> View Resume
          </a>
          <a
            href="/Omkar_Chaudhari_Resume.pdf"
            className="resume-btn download"
            download
          >
            <FiDownload /> Download Resume
          </a>
        </div>
      </div>

      <div className="resume-container">
        <div className="resume-box" data-aos="fade-up">
          <h3>
            <FaGraduationCap /> Education
          </h3>
          {educationDetails.map((item, idx) => (
            <div className="resume-item" key={idx}>
              <span className="resume-year">{item.year}</span>
              <h4>{item.degree}</h4>
              <p>{item.institution}</p>
            </div>
          ))}
        </div>

        <div className="resume-box" data-aos="fade-up">
          <h3>
            <FaCertificate /> Certifications
          </h3>
          {certifications.map((item, idx) => (
            <div className="resume-item" key={idx}>
              <span className="resume-year">{item.year}</span>
              <h4>{item.title}</h4>
              <p>{item.provider}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
