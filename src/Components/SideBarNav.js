import React from "react";
import { NavLink,  useParams } from "react-router-dom";
import "../styles/SideBarNav.scss";
let tree = require("../data/manifestTree.json");

const SideBarNav = (props) => {
	console.log("Sidebar Nav data tree:",tree);
	const params = useParams();

	// Map over json manifestTree to build sidebar nav menu
	const sbn = tree.map((audience, i) => {
		if(audience.audience === params.audience){
			return (
				<li key={i}>
					<ul>
						{audience.categories.map((category, i) => {
							if (category.category === params.category) {
								return (
									<li key={i}>
										<NavLink
											to={`/product/${audience.audience}/${category.category}`}
										>
											{category.label}
										</NavLink>
										<ul>
											{category.groups.map((group, i) => {
												return (
													<li
														className="side-nav-group"
														key={i}
													>
														<NavLink
															to={`/product/${audience.audience}/${category.category}/${group.group}`}
															activeClassName={
																"active-navlink"
															}
														>
															{group.label}
														</NavLink>
													</li>
												);
											})}
										</ul>
									</li>
								);
							} else {
								return (
									<li key={i}>
										<NavLink
											to={`/product/${audience.audience}/${category.category}`}
										>
											{category.label}
										</NavLink>
									</li>
								);
							}
						})}
					</ul>
				</li>
			);
		}else{
			return null
		}
	});

	return (
		<nav className="sidebar-nav">
			<h2>New Arrivals</h2>
			<ul>
				<li>
					<NavLink activeClassName={"active-navlink"} to="/new/all">
						View All
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName={"active-navlink"} to="/new/clothes">
						Clothes
					</NavLink>
				</li>
				<li>
					<NavLink
						activeClassName={"active-navlink"}
						to="/new/shoes-and-accessories"
					>
						Shoes and Accessories
					</NavLink>
				</li>
			</ul>
			<h2>Offers & Deals</h2>
			<ul>
				<li>
					<NavLink activeClassName={"active-navlink"} to="/sale/50percent">
						Up to 50% off
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName={"active-navlink"} to="/sale/tees">
						Tees up to 60% off
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName={"active-navlink"} to="/sale/hoodies">
						Hoodies & Sweatshirts from $12.99
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName={"active-navlink"} to="/sale/pants">
						Pants from $9.99
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName={"active-navlink"} to="/sale/multipacks">
						Multipacks from $9.99
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName={"active-navlink"} to="/sale/studentdiscount">
						Student Discount: Get 15% off
					</NavLink>
				</li>
			</ul>
			<h2>Trending Now</h2>
			<ul>
				<li>
					<NavLink activeClassName={"active-navlink"} to="/trending/summer">
						The Summer Shop
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName={"active-navlink"} to="/trending/linen">
						Linen Clothing
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName={"active-navlink"} to="/trending/heights">
						In the Heights
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName={"active-navlink"} to="/trending/blank">
						Blank Staples: Wholesale
					</NavLink>
				</li>
			</ul>
			<h2>Shop by Category</h2>
			{sbn}
			<h2>Shop by Concept</h2>
			<ul>
				<li>
					<NavLink activeClassName={"active-navlink"} to="/concept/hm-men">
						H&M Men
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName={"active-navlink"} to="/concept/modern">
						Modern Classic
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName={"active-navlink"} to="/concept/casual">
						Casual Wear
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName={"active-navlink"} to="/product/divided">
						Divided
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName={"active-navlink"} to="/concept/basics">
						Basics
					</NavLink>
				</li>
			</ul>
			<h2>Sustainability</h2>
			<ul>
				<li>
					<NavLink activeClassName={"active-navlink"} to="/sustainability/conscious">
						View Products
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName={"active-navlink"} to="/sustainability/care">
						H&M Take Care
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName={"active-navlink"} to="/sustainability/learn">
						Learn More
					</NavLink>
				</li>
			</ul>
			<h2>Gift Cards</h2>
			<ul>
				<li>GiftCards</li>
			</ul>
		</nav>
	);
};

export default SideBarNav;
