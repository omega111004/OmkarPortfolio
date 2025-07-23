import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import './home.scss';

export const Home = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <section className="home" id="home">
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true, zIndex: -1 },
          particles: {
            number: { value: 50 },
            color: { value: '#ffdd40' },
            shape: { type: 'circle' },
            opacity: { value: 0.1 },
            size: { value: 3 },
            move: { enable: true, speed: 0.6 },
          },
          background: { color: "#000000" },
        }}
      />

      {/* Floating Dots */}
      <div className="floating-dots">
        {Array.from({ length: 20 }).map((_, index) => (
          <span
            key={index}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              width: `${Math.random() * 8 + 5}px`,
              height: `${Math.random() * 8 + 5}px`,
            }}
          ></span>
        ))}
      </div>

      {/* Content */}
      <div className="home__container">
        <motion.div
          className="home__left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="home__title">Hi, I'm Omkar Chaudhari</h1>
          <TypeAnimation
            sequence={['Front-End Developer', 2000, 'React Developer', 2000, 'UI/UX Enthusiast', 2000]}
            wrapper="h3"
            speed={50}
            className="home__role"
            repeat={Infinity}
          />
          <div className="home__social-icons">
            <a href="https://github.com/omega111004" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/omkar-chaudhari-6315a7334" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com/whyomkarrrrr?igsh=Y2pub2sxbDVtbHZk" target="_blank" rel="noreferrer"><FaInstagram /></a>
          </div>
        </motion.div>

        <motion.div
          className="home__right"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src="src\assets\omega.jpg" alt="Profile" className="home__profile-img" />
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <div className="scroll-down-indicator">
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Background wave at bottom */}
      <div className="background-wave"></div>
    </section>
  );
};

export default Home;
