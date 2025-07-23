import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import "./style.scss";

const personalDetails = [
  { label: "Name", value: "Omkar Chaudhari" },
  { label: "Age", value: "20" },
  { label: "Location", value: "Mumbai", icon: <ImLocation /> },
  { label: "Email", value: "omkarchaudhari1110@gmail.com", icon: <MdEmail />, link: "mailto:omkarchaudhari1110@gmail.com" },
  { label: "Contact", value: "8208257079", icon: <MdPhone />, link: "tel:8208257079" },
];

const jobSummary =
  "I'm Omkar, a passionate Front End Developer currently learning Full Stack Development with Java. I focus on technologies like HTML, CSS, JavaScript, React, and MySQL. I recently graduated from Mumbai University and enjoy building responsive, user-friendly applications. I'm eager to kickstart my career and contribute to meaningful tech solutions.";

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about-section__wrapper">
        <Animate
          play
          duration={1}
          delay={0.2}
          start={{ transform: "translateX(-600px)", opacity: 0 }}
          end={{ transform: "translateX(0px)", opacity: 1 }}
        >
          <div className="about-section__text">
            <h3 className="role-title">Front End Developer</h3>
            <p className="about-description">{jobSummary}</p>
          </div>
        </Animate>

        <Animate
          play
          duration={1}
          delay={0.5}
          start={{ transform: "translateY(80px)", opacity: 0 }}
          end={{ transform: "translateY(0px)", opacity: 1 }}
        >
          <div className="about-section__personal-info">
            <h3 className="section-title">Personal Information</h3>
            <ul>
              {personalDetails.map((item, index) => (
                <li key={index}>
                  {item.icon && <span className="icon">{item.icon}</span>}
                  <span className="label">{item.label}:</span>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noreferrer" className="value">{item.value}</a>
                  ) : (
                    <span className="value">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Animate>

        <Animate
          play
          duration={1.2}
          delay={0.8}
          start={{ transform: "scale(0.5)", opacity: 0 }}
          end={{ transform: "scale(1)", opacity: 1 }}
        >
          <div className="about-section__services">
            <div className="service-icon"><FaDev size={50} /></div>
            <div className="service-icon"><DiAndroid size={50} /></div>
            <div className="service-icon"><FaDatabase size={50} /></div>
            <div className="service-icon"><DiApple size={50} /></div>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default AboutMe;
