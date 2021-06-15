import React from 'react'; 
import {NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <section className="header-left">
                <div>Customer Service</div>
                <div>Student Discount</div>
                <div>Find a store</div>
                <div>...</div>
            </section>
            <section className='header-center'>
                <div>Logo</div>
                <nav>
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
            </section>
                <div>
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
                </div>
                <div>
                    Search products
                </div>
            <section className='header-right'>
                
            </section>
        </header>
    )
}

export default Header;




