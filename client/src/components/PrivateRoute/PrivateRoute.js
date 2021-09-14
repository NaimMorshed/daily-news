import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useContext(UserContext);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.status ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/auth",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;