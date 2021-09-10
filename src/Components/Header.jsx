import React from "react";
// import { css } from "@emotion/css";	
import { NavLink, Link } from "react-router-dom";
import "../styles/Header.scss";
import { BsSearch } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { RiUser3Line } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiCircle } from "react-icons/bi";
import { useState } from "react";
import HeaderDropDown from "./HeaderDropDown.jsx";
import AlertReadme from './AlertReadme.jsx'
// import { useRef } from "react";

const Header = () => {
	// THIS IS ME TESTING / TRYING TO GET DROPDOWN TO HIDE/SHOW
	const [showClass, setShowClass] = useState("hidden");
	const [headerNavAudience, setHeaderNavAudience] = useState("women");
	

	const handleShowMenu = (audience) => {
		console.log("show - ", audience);
		setHeaderNavAudience(audience)
		setShowClass("shown");
	};

	const handleHideMenu = () => {
		setShowClass("hidden");
		console.log("hide");
	};

	return (
		<header className="header-main-top">
			<AlertReadme/>
			<nav className="top-left">
				<ul>
					<li>
						<Link to="/customer-service">Customer Service</Link>
					</li>
					<li>
						<Link to="/sale/student-discount">
							Student Discount
						</Link>
					</li>
					<li>
						<Link to="/store-locator">Find a store</Link>
					</li>
					{/* <li>...</li> */}
					<div className="top-left-circles">
						<NavLink to="fake/:someSortOfMenuGuy!">
							<span>
								<BiCircle />
							</span>
							<span>
								<BiCircle />
							</span>
							<span>
								<BiCircle />
							</span>
						</NavLink>
					</div>
				</ul>
			</nav>
			<div className="logo-bc">
				<NavLink to="/">
					<img
						alt="Ben & Cody"
						src="https://res.cloudinary.com/dhad6e9gj/image/upload/v1623858729/HM_Site_Project/customLogo_RED_med-03_celm0k.png"
					/>
				</NavLink>
			</div>
			<nav className="top-right">
				<ul>
					<li>
						<span>
							<RiUser3Line />
						</span>
						<NavLink to="/fake/:signIn">Sign in</NavLink>
					</li>
					<li>
						<span>
							<BsHeart />
						</span>
						<NavLink to="/fake/:Favorites">Favorites</NavLink>
					</li>
					<li>
						<span>
							<HiOutlineShoppingBag />
						</span>
						<NavLink to="/fake/:shoppingBag">Shopping Bag</NavLink>
					</li>
				</ul>
			</nav>
			<nav
				className="middle-nav"
				
				onMouseLeave={handleHideMenu}
				onClick={handleHideMenu}
			>
				<ul>
					<li onMouseEnter={()=>handleShowMenu('women')}>
						<NavLink to="/product/women">Women</NavLink>
					</li>
					<li onMouseEnter={()=>handleShowMenu('divided')}>
						<NavLink to="/product/divided">Divided</NavLink>
					</li>
					<li onMouseEnter={()=>handleShowMenu('men')}>
						<NavLink to="/product/men">Men</NavLink>
					</li>
					<li onMouseEnter={()=>handleShowMenu('baby')}>
						<NavLink to="/product/baby">Baby</NavLink>
					</li>
					<li onMouseEnter={()=>handleShowMenu('kids')}>
						<NavLink to="/product/kids">Kids</NavLink>
					</li>
					<li onMouseEnter={()=>handleShowMenu('hmhome')}>
						<NavLink to="/product/hmhome">H&M HOME</NavLink>
					</li>
					<li onMouseEnter={()=>handleShowMenu('sale')}>
						<NavLink to="/fake/:sale">Sale</NavLink>
					</li>
					<li onMouseEnter={()=>handleShowMenu('sustainability')}>
						<NavLink to="/fake/:sustainability">
							Sustainability
						</NavLink>
					</li>
				</ul>
			</nav>
			<div
				id="header-dropdown-wrapper"
				onMouseLeave={handleHideMenu}

				onMouseEnter={()=>handleShowMenu(headerNavAudience)}
				onClick={handleHideMenu}
			>
				<HeaderDropDown
					audience={headerNavAudience}
					showClass={showClass}
					onMouseEnter={()=>handleShowMenu(headerNavAudience)}
					onMouseLeave={handleHideMenu}
				/>
			</div>
			<span className="search">
				<span>
					<BsSearch />
				</span>
				{/* <u>Search products<u> */}
				<input type="search" placeholder="Search products" />
			</span>
			<section className="header-center"></section>
			<section className="header-right"></section>
		</header>
	);
};

export default Header;
