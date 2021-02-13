import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import logo from '../favicon.ico'

function Navbar() {

    let [classes, setClasses] = useState(false)

    function toggleDropdown() {
        setClasses(classes = !classes)  
    }

    return (

        <React.Fragment>

            <nav className='navbar fixed-top navbar-expand-sm navbar-dark px-sm-5 navbar-desktop'>
                <Link to='/'>
                    <img src={logo} alt='Любимые Овощи' className='navbar-brand logo'/>
                </Link>

                <ul className="navbar-nav align-items-center">
                    <li className='nav-item ml-5' >
                        <Link to='/' className='nav-link'>
                            Каталог
                        </Link>
                    </li>
                    <li className='nav-item ml-5'>
                        <Link to='/contact' className='nav-link'>
                            Контакты
                        </Link>
                    </li>
                    <li className='nav-item ml-5'>
                        <Link to='/about' className='nav-link'>
                            О нас
                        </Link>
                    </li>
                </ul>
                        
                <Link to='/cart' className='ml-auto'>
                    <button className='cart-button'>
                        <span>
                            <i className="fas fa-cart-plus"/>
                        </span>
                        Корзина
                    </button>
                </Link>
            </nav>

            <nav className='navbar fixed-top navbar-expand-sm navbar-dark px-sm-5 navbar-mobile'>
                <div className={classes ? 'dropdown show' : 'dropdown'}>
                    <button 
                        className={classes ? 'dropdown-btn rotate' : 'dropdown-btn'}
                        type="button"
                        id="dropdownMenuButton"
                        onClick={toggleDropdown}
                        aria-haspopup="true"
                        aria-expanded={classes ? 'true' : 'false'}
                        >
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <div className={classes ? 'dropdown-menu show' : 'dropdown-menu'} aria-labelledby="dropdownMenuButton">
                        <Link to='/' className='nav-link' onClick={toggleDropdown}>
                            Каталог
                        </Link>
                        <Link to='/contact' className='nav-link' onClick={toggleDropdown}>
                            Контакты
                        </Link>
                        <Link to='/about' className='nav-link' onClick={toggleDropdown}>
                            О нас
                        </Link>
                    </div>
                </div>
                <Link to='/'>
                    <img src={logo} alt='Любимые Овощи' className='navbar-brand logo'/>
                </Link>
                <Link to='/cart'>
                    <button className='cart-button'>
                        <span>
                            <i className="fas fa-cart-plus"/>
                        </span>
                    </button>
                </Link>
            </nav>

    </React.Fragment>
    )
    

      
}

export default Navbar
