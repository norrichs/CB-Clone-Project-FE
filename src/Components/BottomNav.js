import react from 'react'
// import './styles/BottomNav.scss'
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
        <li>
          <NavLink to="/women" className="selected" >Women</NavLink>
        </li>
        <li>
          <NavLink to="/divided" className="selected">Divided</NavLink>
        </li>
        <li>
          <NavLink to="/men" className="selected">Men</NavLink>
        </li>
        <li>
          <NavLink to="/baby" className="selected">Baby</NavLink>
        </li>
        <li>
          <NavLink to="/kids" className="selected">Kids</NavLink>
        </li>
        <li>
          <NavLink to="/home" className="selected">H&M HOME</NavLink>
        </li>
        <li>
          <NavLink to="/studentDiscount" className="selected">Student Discount</NavLink>
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
        <li>
          <NavLink to="/career" className="selected" >Career at H&M</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="selected">About H&M</NavLink>
        </li>
        <li>
          <NavLink to="/sustainability" className="selected">Sustainability</NavLink>
        </li>
        <li>
          <NavLink to="/press" className="selected">Press</NavLink>
        </li>
        <li>
          <NavLink to="/investorRelations" className="selected">Investor Relations</NavLink>
        </li>
        <li>
          <NavLink to="/corporate" className="selected">Corporate Governance</NavLink>
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
        <li>
          <NavLink to="/customerService" className="selected" >Customer Service</NavLink>
        </li>
        <li>
          <NavLink to="/myAccount" className="selected">My Account</NavLink>
        </li>
        <li>
          <NavLink to="/findAStore" className="selected">Find a Store</NavLink>
        </li>
        <li>
          <NavLink to="/legal" className="selected">Legal & Privicy</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="selected">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/giftCard" className="selected">Gift Card</NavLink>
        </li>
        <li>
          <NavLink to="/supplyChain" className="selected">CA Supply Chains Act</NavLink>
        </li>
        <li>
          <NavLink to="/cookieSettings" className="selected">Cookie settings</NavLink>
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
        <li>
          <NavLink to="/join" className="selected" >Join now and get 10% off your next purchase</NavLink>
        </li>
      </ul>
    </nav>
    </div>
    </section>
    </div>






    <div id="footer-lower-section-container">
        <div id="footer-lower-section-icons">
            <AiFillFacebook/>
            <AiOutlineTwitter/>
            <AiOutlineInstagram/>
            <AiFillYoutube/>
            <ImPinterest/>
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