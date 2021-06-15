import React from 'react'; 
import {Link, NavLink} from 'react-router-dom'
const SideBarNav = (props) => {


    const navTree = [
        {audience: "women", category: "swimwear", group: "bikini-sets"},
        {audience: "women", category: "swimwear", group: "swimsuits"},
        {audience: "women", category: "swimwear", group: "beachwear"},
    ]

// TODO scrape the copy text for the above values, or just set implement a formatting function


    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/women/swimwear">
                        Swimwear
                        <ul>
                            <li>
                                <NavLink to="/women/swimwear/bikini-sets">
                                    Bikini Sets
                                </NavLink>
                                <NavLink to="/women/swimwear/swimsuits">
                                    Swimsuits
                                </NavLink>
                                <NavLink to="/women/swimwear/beachwear">
                                    Beachwear
                                </NavLink>
                            </li>
                        </ul>
                    </NavLink>
                </li>
            </ul>
        </nav>




    )
}

export default SideBarNav;