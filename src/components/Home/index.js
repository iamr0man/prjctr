import React, {useState} from 'react';
import HomeView from "./HomeView";
import './index.scss'
import {useAuthService} from "../../services/auth";

function Home () {
    const [userName, setUserName] = useState('')
    const authService = useAuthService()

    const doLogin = (e) => {
        e.preventDefault()
        authService.login(userName)
    }

    return (
        <HomeView
            userName={userName}
            onChangeUserName={(payload) => setUserName(payload)}
            onSubmit={doLogin}
        />
    );
}

export default Home;
