import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Classes = {
    root: "bg-white flex justify-between p-5",
    logoStyle: { fontFamily: "'Abril Fatface', cursive", },
    logo: "font-bold text-3xl",
    daily: "text-red-600 tracking-tighter",
    news: "tracking-widest",
    navItems: "mx-3 text-xl",
    buttons: "mx-2 bg-blue-500 rounded text-white px-3",
}

const NavBar = () => {
    // eslint-disable-next-line no-unused-vars
    const [auth, setAuth, nav, setNav] = useContext(UserContext);

    return (
        <div className={Classes.root}>
            <section>
                <span style={Classes.logoStyle} className={Classes.logo}>
                    <span className={Classes.daily}>DAILY</span>
                    <span className={Classes.news}>NEWS</span>
                </span>
            </section>
            <section>
                <Link to={`/`}>
                    <span className={Classes.navItems}>Home</span>
                </Link>
                <Link to={`/category/World`}>
                    <span className={Classes.navItems}>World</span>
                </Link>
                <Link to={`/category/Technology`}>
                    <span className={Classes.navItems}>Technology</span>
                </Link>
                <Link to={`/category/Sport`}>
                    <span className={Classes.navItems}>Sport</span>
                </Link>
                <Link to={`/category/Entertainment`}>
                    <span className={Classes.navItems}>Entertainment</span>
                </Link>
            </section>
            <section>
                <Link to={`/auth`} className={Classes.buttons}>Login</Link>
                <button className={Classes.buttons}>Logout</button>
            </section>
        </div>
    );
};

export default NavBar;
