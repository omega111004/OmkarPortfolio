import React from 'react'
import {FaBars ,FaReact } from 'react-icons/fa';
import {HiX} from 'react-icons/hi'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import './style.scss';


const data = [
    {
        lable: 'Home',
        to: '/'
    },
    {
        lable: 'About me',
        to: '/about'
    },
    {
        lable: 'Skills',
        to: '/skills'
    },
    {
        lable: 'Resume',
        to: '/resume'
    },
    {
        lable: 'Contact',
        to: '/contact'
    }
];

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false)

    const handleToggleIcon = () => {

        setToggleIcon(!toggleIcon)

    }
    return (
        <div>
            <nav className='navbar'>
                <div className='navbar__container'>
                    <Link to={'/'} className='navbar__container__logo'>
                        <FaReact size={30} />
                    </Link>

                </div>
                <ul className={`navbar__container__menu ${toggleIcon ? 'active' : ''}`}>
                    {
                        data.map((item, key) => (
                            <li key={key} className='navbar__container__menu__items'>
                                <Link className='navbar__container__menu__items__links' to={item.to}>
                                    {item.lable}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className='nav-icon' onClick={handleToggleIcon}>
                    {
toggleIcon ? <HiX size={30}/> : <FaBars size={30}/>
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navbar;