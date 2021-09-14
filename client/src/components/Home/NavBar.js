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
    avatar: "w-8 h-8 rounded-full",
}

const NavBar = () => {
    // eslint-disable-next-line no-unused-vars
    const [user, setUser, nav, setNav] = useContext(UserContext);

    const UserImg = () => {
        return (
            <img className={Classes.avatar} src={user.photo} alt="user" />
        );
    }

    return (
        <div className={Classes.root}>
            <section>
                <Link to={"/"}>
                    <span style={Classes.logoStyle} className={Classes.logo}>
                        <span className={Classes.daily}>DAILY</span>
                        <span className={Classes.news}>NEWS</span>
                    </span>
                </Link>
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
                {
                    !user.status ?
                        <Link to={`/auth`}>
                            <DefaultIcon />
                        </Link> :
                        <Link to={`/profile`}>
                            <UserImg />
                        </Link>
                }
            </section>
        </div>
    );
};

const DefaultIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
        </svg>
    );
}

export default NavBar;
