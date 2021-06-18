import React from 'react'; 
import {NavLink, Link} from 'react-router-dom'
import '../styles/Header.scss'

const Header = () => {
    return (
        <header className="header-main-top">
                <nav className="top-left">
                    <ul>
                        <li><Link to="/customer-service">Customer Service</Link></li>
                        <li><Link to="/student-discount">Student Discount</Link></li>
                        <li><Link to="/store-locator">Find a store</Link></li>
                        <li>...</li>
                    </ul>
                </nav>
                <div className='logo-bc'>Logo</div>
                <nav className="top-right">
                    <ul>
                        <li>
                            <div>Sign in</div>
                        </li>
                        <li>
                            <div>Favorites</div>
                        </li>
                        <li>
                            <div>Shopping Bag</div>
                        </li>
                    </ul>
                </nav>
                <nav className="middle-nav">
                    <ul>
                    <li>
                        <NavLink to="/women">Women</NavLink>
                    </li>
                    <li>
                        <NavLink to="/divided">Divided</NavLink>
                    </li>
                    <li>
                        <NavLink to="/men">Men</NavLink>
                    </li>
                    <li>
                        <NavLink to="/baby">Baby</NavLink>
                    </li>
                    <li>
                        <NavLink to="/kids">Kids</NavLink>
                    </li>
                    <li>
                        <NavLink to="/home">H&M HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sale">Sale</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sustainability">Sustainability</NavLink>
                    </li>

                    </ul>
                </nav>
                <div className="search">
                    Search products
                </div>
            <section className='header-center'>
            </section>
            <section className='header-right'>
                
            </section>
        </header>
    )
}

export default Header;




