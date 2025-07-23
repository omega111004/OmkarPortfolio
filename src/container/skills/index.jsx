import React, { useEffect } from "react";
import "./skills.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaHtml5, FaCss3Alt, FaReact, FaGithub, FaBootstrap,
} from "react-icons/fa";
import {
  SiJavascript, SiTailwindcss,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", percent: 80, icon: <FaHtml5 /> },
      { name: "CSS", percent: 75, icon: <FaCss3Alt /> },
      { name: "JavaScript", percent: 70, icon: <SiJavascript /> },
      { name: "React", percent: 65, icon: <FaReact /> },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "VS Code", percent: 85, icon: <VscVscode /> },
      { name: "GitHub", percent: 75, icon: <FaGithub /> },
      { name: "Bootstrap", percent: 70, icon: <FaBootstrap /> },
      { name: "Tailwind CSS", percent: 60, icon: <SiTailwindcss /> },
    ],
  },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title" data-aos="fade-up">My Skills</h2>
      <div className="skills-grid">
        {skillsData.map((section, i) => (
          <div className="skills-card" key={i} data-aos="zoom-in">
            <h3 className="skills-category">{section.category}</h3>
            <div className="skills-list">
              {section.skills.map((skill, idx) => (
                <div className="skill-item" key={idx}>
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-info">
                    <p>{skill.name}</p>
                    <div className="circle">
                      <svg>
                        <circle cx="30" cy="30" r="28"></circle>
                        <circle
                          cx="30"
                          cy="30"
                          r="28"
                          style={{
                            strokeDashoffset: 176 - (176 * skill.percent) / 100,
                          }}
                        ></circle>
                      </svg>
                      <span>{skill.percent}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
