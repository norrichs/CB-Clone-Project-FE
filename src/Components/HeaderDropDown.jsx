import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/HeaderDropDown.scss";

const tree = require("../data/manifestTree.json");

const HeaderDropDown = ({ showClass, handleHideMenu, audience }, props) => {
	// console.log('sidebar nav data',tree )
	const navData = {};
	tree.forEach((audienceObj) => {
		navData[audienceObj.audience] = audienceObj.categories.map(
			(categoryObj) => {
				return {
					route:
						"/product/" +
						audienceObj.audience +
						"/" +
						categoryObj.category,
					label: categoryObj.label
				};
			}
		);
	});
    console.log('headerDropdown navData',navData)

	// const navData = {
	// 	women: [
	// 		{ route: "/product/women/dresses", label: "Dresses" },
	// 		{ route: "/product/women/tops", label: "Tops" },
	// 	],
	// 	men: [
	// 		{ route: "/product/men/shirts", label: "Shirts" },
	// 		{ route: "/product/men/jeans", label: "Jeans" },
	// 	],
	// };

	const audienceNavDisplay = navData[audience].map((nav, i) => {
		return (
			<li key={i}>
				<NavLink activeClassName={"active-navlink"} to={nav.route}>
					{nav.label}
				</NavLink>
			</li>
		);
	});

	return (
		<nav className={"header-nav " + showClass} onClick={handleHideMenu}>
			<div className="category-column">
				<div className="header-group">
					<h2>New Arrivals</h2>
					<ul>
						<li>
							<NavLink
								activeClassName={"active-navlink"}
								to="/product/new/all"
							>
								View All
							</NavLink>
						</li>
						<li>
							<NavLink
								activeClassName={"active-navlink"}
								to="/product/new/clothes"
							>
								Clothes
							</NavLink>
						</li>
						<li>
							<NavLink
								activeClassName={"active-navlink"}
								to="/product/new/shoes-and-accessories"
							>
								Shoes and Accessories
							</NavLink>
						</li>
					</ul>
				</div>
				<div className="header-group">
					<h2>Offers & Deals</h2>
					<ul>
						<li>
							<NavLink
								activeClassName={"active-navlink"}
								to="/product/sale/50percent"
							>
								Up to 50% off
							</NavLink>
						</li>
						<li>
							<NavLink
								activeClassName={"active-navlink"}
								to="/product/sale/tees"
							>
								Tees up to 60% off
							</NavLink>
						</li>
						<li>
							<NavLink
								activeClassName={"active-navlink"}
								to="/product/sale/hoodies"
							>
								Hoodies & Sweatshirts from $12.99
							</NavLink>
						</li>
						<li>
							<NavLink
								activeClassName={"active-navlink"}
								to="//productsale/pants"
							>
								Pants from $9.99
							</NavLink>
						</li>
						<li>
							<NavLink
								activeClassName={"active-navlink"}
								to="/product/sale/multipacks"
							>
								Multipacks from $9.99
							</NavLink>
						</li>
						<li>
							<NavLink
								activeClassName={"active-navlink"}
								to="/product/sale/studentdiscount"
							>
								Student Discount: Get 15% off
							</NavLink>
						</li>
					</ul>
				</div>
				<div className="header-group">
					<h2>Trending Now</h2>
					<ul>
						<li>
							<NavLink
								activeClassName={"active-navlink"}
								to="/product/trending/summer"
							>
								The Summer Shop
							</NavLink>
						</li>
						<li>
							<NavLink
								activeClassName={"active-navlink"}
								to="/trending/linen"
							>
								Linen Clothing
							</NavLink>
						</li>
						<li>
							<NavLink
								activeClassName={"active-navlink"}
								to="/trending/heights"
							>
								In the Heights
							</NavLink>
						</li>
						<li>
							<NavLink
								activeClassName={"active-navlink"}
								to="/product/trending/blank"
							>
								Blank Staples: Wholesale
							</NavLink>
						</li>
					</ul>
				</div>
			</div>

			<div className="category-column" id="audience-nav">
				<div className="header-group">
					<h2>Shop by Category</h2>
					{/* {hdd} */}
					<ul>
						{audienceNavDisplay}

						{/* <li>
                            <NavLink activeClassName={"active-navlink"} to="/product/women/dresses">
                                Dresses
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={"active-navlink"} to="/product/women/tops">
                                Tops
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={"active-navlink"} to="/product/women/shirts-blouses">
                                Shirts & Blouses
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={"active-navlink"} to="/product/women/pants">
                                Pants
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={"active-navlink"} to="/product/women/cardigans-sweaters">
                                Jeans
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={"active-navlink"} to="/product/women/tops">
                                Cardigans & Sweaters
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={"active-navlink"} to="/product/women/hoodies-sweatshirts">
                                Hoodies & Sweatshirts
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={"active-navlink"} to="/product/women/basics">
                                Basics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={"active-navlink"} to="/product/women/blazers">
                                Blazers
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={"active-navlink"} to="/product/women/jackets-coats">
                                Jackets & Coats
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={"active-navlink"} to="/product/women/shoes">
                                Shoes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={"active-navlink"} to="/product/women/sportswear">
                                Sportswear
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={"active-navlink"} to="/product/women/jumpsuits-rompers">
                                Jumpsuits & Rompers
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={"active-navlink"} to="/product/women/swimwear">
                                Swimwear & Beachwear
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={"active-navlink"} to="/product/women/skirts">
                                Skirts
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={"active-navlink"} to="/product/women/shorts">
                                Shorts
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={"active-navlink"} to="/product/women/accessories">
                                Accessories
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={"active-navlink"} to="/product/women/lingerie">
                                Lingerie
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={"active-navlink"} to="/product/women/socks-tights">
                                Socks & Tights
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={"active-navlink"} to="/product/women/maternity-cloths">
                                Maternity Wear
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={"active-navlink"} to="/product/women/plus-size">
                                Plus Sizes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={"active-navlink"} to="/product/women/beauty">
                                Beauty
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={"active-navlink"} to="/product/women/petite">
                                Petite Size
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={"active-navlink"} to="/product/women/loungewear">
                                Loungewear
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={"active-navlink"} to="/product/women/sleepwear">
                                Sleepwear & Loungewear
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={"active-navlink"} to="/product/women/premium-selection">
                                Premium Selection
                            </NavLink>
                        </li> */}
					</ul>
				</div>
			</div>

			<div className="category-column">
				<div className="header-group">
					<h2>Shop by Concept</h2>
					<ul>
						<li>
							<NavLink
								activeClassName={"active-navlink"}
								to="/product/concept/hm-men"
							>
								H&M Men
							</NavLink>
						</li>
						<li>
							<NavLink
								activeClassName={"active-navlink"}
								to="/product/concept/modern"
							>
								Modern Classic
							</NavLink>
						</li>
						<li>
							<NavLink
								activeClassName={"active-navlink"}
								to="/product/concept/casual"
							>
								Casual Wear
							</NavLink>
						</li>
						<li>
							<NavLink
								activeClassName={"active-navlink"}
								to="/product/product/divided"
							>
								Divided
							</NavLink>
						</li>
						<li>
							<NavLink
								activeClassName={"active-navlink"}
								to="/product/concept/basics"
							>
								Basics
							</NavLink>
						</li>
					</ul>
				</div>
				<div className="header-group">
					<h2>Sustainability</h2>
					<ul>
						<li>
							<NavLink
								activeClassName={"active-navlink"}
								to="/product/sustainability/conscious"
							>
								View Products
							</NavLink>
						</li>
						<li>
							<NavLink
								activeClassName={"active-navlink"}
								to="/product/sustainability/care"
							>
								H&M Take Care
							</NavLink>
						</li>
						<li>
							<NavLink
								activeClassName={"active-navlink"}
								to="/product/sustainability/learn"
							>
								Learn More
							</NavLink>
						</li>
					</ul>
				</div>
				<div className="header-group">
					<h2>Gift Cards</h2>
					<ul>
						<NavLink
							activeClassName={"active-navlink"}
							to="/product/sustainability/learn"
						>
							Gift Cards
						</NavLink>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default HeaderDropDown;
