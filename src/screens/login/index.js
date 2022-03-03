import React, { useState } from "react";

import { useNavigate } from "react-router";

const TEST_DATA = [
    {
        id: 1,
        email: 'kandidat@mail.com',
        username: 'kandidat',
        password: 'Enver001.',
        role: []
    },
    {
        id: 2,
        email: 'user@mail.com',
        username: 'user',
        password: 'Enver001.',
        role: ['employee']
    },
    {
        id: 3,
        email: 'admin@mail.com',
        username: 'admin',
        password: 'Enver001.',
        role: ['employee', 'admin']
    },
    {
        id: 4,
        email: 'sys_admin@mail.com',
        username: 'sys_admin',
        password: 'Enver001.',
        role: ['employee', 'admin', 'sys_admin']
    },
]

const Login = () => {
    const navigate = useNavigate()
    const [authData, setAuthData] = useState({
        emailOrUsername: null,
        password: null
    });

    const submitAuthData = () => {
        // TEST DATA
        let user = TEST_DATA.find(user => {
            return (
                (user.email == authData.emailOrUsername || user.username == authData.emailOrUsername) &&
                user.password == authData.password
            );
        });
        //

        if(!user)
            return;
        
        navigate('/admin/dashboard');
    }

    return (
        <div className="screen center-content login-screen"></div>
    );
};

export default Login;
