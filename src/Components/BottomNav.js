import React from 'react'
import {NavLink} from 'react-router-dom'
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {ImPinterest} from 'react-icons/im'

const BottomNav = () => {
return (
    <>
    {/* <div>
      <h4>SHOP</h4>
    </div> */}

    <div id="footer-container">
    <section id="footer-content-container">
    <div id="footer-col1">
    {/* <div>
        <h4>SHOP</h4>
    </div> */}
    <nav>
      <ul>
        <li className="footer-links">
          <NavLink to="/women" className="selected" >Women</NavLink>
        </li>
        <li className="footer-links">
          <NavLink to="/divided" className="selected">Divided</NavLink>
        </li>
        <li className="footer-links">
          <NavLink to="/men" className="selected">Men</NavLink>
        </li>
        <li className="footer-links">
          <NavLink to="/baby" className="selected">Baby</NavLink>
        </li>
        <li className="footer-links">
          <NavLink to="/kids" className="selected">Kids</NavLink>
        </li>
        <li className="footer-links">
          <NavLink to="/home" className="selected">H&M HOME</NavLink>
        </li>
        <li className="footer-links">
          <NavLink to="/unidays" className="selected">Student Discount</NavLink>
        </li>
      </ul>
    </nav>
    </div>

    <div id="footer-col2">
    {/* <div>
        <h4>CORPORATE INFO</h4>
    </div> */}
    <nav>
      <ul>
        <li className="footer-links">
          <NavLink to="fake/:career" className="selected" >Career at H&M</NavLink>
        </li>
        <li className="footer-links">
          <NavLink to="fake/:about" className="selected">About H&M</NavLink>
        </li>
        <li className="footer-links">
          <NavLink to="fake/:sustainability" className="selected">Sustainability</NavLink>
        </li>
        <li className="footer-links">
          <NavLink to="fake/:press" className="selected">Press</NavLink>
        </li>
        <li className="footer-links">
          <NavLink to="fake/:investorRelations" className="selected">Investor Relations</NavLink>
        </li>
        <li className="footer-links">
          <NavLink to="fake/:corporate" className="selected">Corporate Governance</NavLink>
        </li>
      </ul>
    </nav>
    </div>

    <div id="footer-col3">
    {/* <div>
        <h4>HELP</h4>
    </div> */}
    <nav>
      <ul>
        <li className="footer-links">
          <NavLink to="fake/:customerService" className="selected" >Customer Service</NavLink>
        </li>
        <li className="footer-links">
          <NavLink to="fake/:myAccount" className="selected">My Account</NavLink>
        </li>
        <li className="footer-links">
          <NavLink to="fake/:findAStore" className="selected">Find a Store</NavLink>
        </li>
        <li className="footer-links">
          <NavLink to="fake/:legal" className="selected">Legal & Privicy</NavLink>
        </li>
        <li className="footer-links">
          <NavLink to="fake/:contact" className="selected">Contact</NavLink>
        </li>
        <li className="footer-links">
          <NavLink to="fake/:giftCard" className="selected">Gift Card</NavLink>
        </li>
        <li className="footer-links">
          <NavLink to="fake/:supplyChain" className="selected">CA Supply Chains Act</NavLink>
        </li>
        <li className="footer-links">
          <NavLink to="fake/:cookieSettings" className="selected">Cookie settings</NavLink>
        </li>
      </ul>
    </nav>
    </div>
    <div id="footer-col4">
    {/* <div>
        <h4>HELP</h4>
    </div> */}
    <nav>
      <ul>
        <li className="footer-links">
          <NavLink to="/fake/:join" className="selected" >Join now and get 10% off your next purchase</NavLink>
        </li>
      </ul>
    </nav>
    </div>
    </section>
    </div>


    <div id="footer-lower-section-container">
        <div id="footer-lower-section-icons">
            <a href="https://www.facebook.com/hmtheus" target="blank" alt="facebook logo" ><AiFillFacebook/></a> 
            <a href="https://twitter.com/hmusa" target="blank" alt="twitter logo"><AiOutlineTwitter/></a>
            <a href="https://www.instagram.com/hm/" target="blank" alt="instagram logo"><AiOutlineInstagram/></a>
            <a href="http://www.youtube.com/user/hennesandmauritz" target="blank" alt="youtube logo"><AiFillYoutube/></a>
            <a href="https://www.pinterest.com/hm/" target="blank" alt="pintrest logo"><ImPinterest/></a>
        </div>

        <div id="footer-lower-section-copy">
            <p>The content of this site is copyright-protected and is the property of H&M Hennes & Mauritz AB. H&M is committed to accessibility. That commitment means H&M embraces WCAG...</p>
            <p>READ MORE</p>
        </div>

        <div id="footer-lower-section-logo">
            <p>BEN <span ><img id="bc-logo" src="https://res.cloudinary.com/dhad6e9gj/image/upload/v1623858722/HM_Site_Project/customLogo_BLACK_sm-06_qsehee.png"/></span> CODY</p>
        </div>
    </div>
    </>

    )
}

export default BottomNav