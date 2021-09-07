import React from 'react';

const NavBar = () => {
    return (
        <div className="bg-white flex justify-between p-5">
            <section>
                <h3>LOGO</h3>
            </section>
            <section>
                <span className="mx-3">Home</span>
                <span className="mx-3">Home</span>
                <span className="mx-3">Home</span>
                <span className="mx-3">Home</span>
            </section>
            <section>
                <button className="mx-2 bg-blue-500 rounded text-white px-3">Login</button>
                <button className="mx-2 bg-blue-500 rounded text-white px-3">Logout</button>
            </section>
        </div>
    );
};

export default NavBar;