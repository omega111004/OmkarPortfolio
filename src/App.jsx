import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadSlim } from "tsparticles-slim";
import Home from './container/home/Home';
import AboutMe from './container/aboutme';
import Contact from './container/contact';
import Skills from './container/skills';
import Resume from './container/resume';
import Navbar from './components/navBar';
import particles from './utils.js/particles';

function App() {

  const location = useLocation();

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const isHomePage = location.pathname === '/';

  return (
    <div className="App">
      {/* Show Particles only on Home page */}
      {isHomePage && (
        <Particles id='tsparticles' options={particles} init={particlesInit} />
      )}

      {/* Show animated background only on other pages */}
      {!isHomePage && (
        <>
          <div className="background-glow" />
          <div className="background-wave" />
          <div className="floating-dots">
            {[...Array(20)].map((_, i) => (
              <span
                key={i}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDuration: `${8 + Math.random() * 5}s`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
        </>
      )}

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className='App__main-page-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutMe />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
