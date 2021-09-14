import React, { useContext } from 'react';
//import { auth } from '../../config/firebase';
import { UserContext } from '../../App';
import { useHistory } from 'react-router';

const Profile = () => {
    // eslint-disable-next-line no-unused-vars
    const [user, setUser, nav, setNav] = useContext(UserContext);
    const history = useHistory();

    const signOutFirebase = () => {
        // auth
        // .signOut
        // .then(() => {
        //     setUser({
        //         status: false,
        //         email: null,
        //         name: null,
        //         photo: null
        //     })
        //     history.push("/");
        // })
        setUser({
            status: false,
            email: null,
            name: null,
            photo: null
        })
        history.push("/");
    }

    const Classes = {
        img: "w-20 h-20 rounded-full",
        h1: "text-2xl",
        subParent: "bg-white flex flex-col p-5 rounded text-center justify-center align-center",
        imgDiv: "flex justify-center",
        signOut: "bg-red-500 rounded px-4 py-1 mt-5 text-white",
    }

    return (
        <div className="parent">
            <div className={Classes.subParent}>
                <div className={Classes.imgDiv}>
                    <img className={Classes.img} src={user.photo} alt={user.name} />
                </div>
                <h1 className={Classes.h1}>{user.name}</h1>
                <button onClick={signOutFirebase} className={Classes.signOut}>Sign out</button>
            </div>
        </div>
    );
};

export default Profile;