import React from "react";
import routs from "./../../routing/routs"
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {
                    routs.filter(i => i.navbar).map(item => (
                        <li className="navbar-list-item" key={item.id}>
                            <NavLink to={item.path}
                                     className={({ isActive }) => isActive ? "active" : ""}
                            >
                                <div className="icon">{item.icon}</div>
                            </NavLink>

                        </li>
                    ))
                }

            </ul>
        </nav>
    )
}

export default Navbar;