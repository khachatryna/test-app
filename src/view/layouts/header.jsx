import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import routs from "../../routing/routs";

function Header() {
    const [title, setTitle] = useState("");
    const location = useLocation();

    useEffect(() => {
        if (location.pathname) {
            const routTitle = routs.filter(item => item.path === location.pathname)
            setTitle(routTitle && routTitle[0] ? routTitle[0].name : "Page Not Fount")
        }
    }, [location])
    return (
        <header>
            <div className="title">{title}</div>
        </header>
    )
}

export default Header