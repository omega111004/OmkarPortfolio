import React, { useState } from 'react';
import { FaBars, FaReact } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import './style.scss';

const menuItems = [
  { label: 'Home', to: '/' },
  { label: 'About Me', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Resume', to: '/resume' },
  { label: 'Contact', to: '/contact' }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleToggle = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className='navbar'>
      <div className='navbar__container'>
        <Link to='/' className='navbar__container__logo'>
          <FaReact size={28} />
        </Link>

        <ul className={`navbar__container__menu ${menuOpen ? 'active' : ''}`}>
          {menuItems.map((item, index) => (
            <li key={index} className='navbar__container__menu__items'>
              <Link
                to={item.to}
                className={`navbar__container__menu__items__links ${
                  location.pathname === item.to ? 'active' : ''
                }`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className='nav-icon' onClick={handleToggle}>
          {menuOpen ? <HiX size={28} /> : <FaBars size={28} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
