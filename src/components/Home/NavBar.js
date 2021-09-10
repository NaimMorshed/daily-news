import React from 'react';

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
    return (
        <div className={Classes.root}>
            <section>
                <span style={Classes.logoStyle} className={Classes.logo}>
                    <span className={Classes.daily}>DAILY</span>
                    <span className={Classes.news}>NEWS</span>
                </span>
            </section>
            <section>
                <span className={Classes.navItems}>Home</span>
                <span className={Classes.navItems}>World</span>
                <span className={Classes.navItems}>Technology</span>
                <span className={Classes.navItems}>Sport</span>
                <span className={Classes.navItems}>Entertainment</span>
            </section>
            <section>
                <button className={Classes.buttons}>Login</button>
                <button className={Classes.buttons}>Logout</button>
            </section>
        </div>
    );
};

export default NavBar;
