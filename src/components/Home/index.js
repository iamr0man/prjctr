import React, {useState} from 'react';
import HomeView from "./HomeView";
import {useAuthState} from "../../store/modules/AuthState";
import {useNavigationState} from "../../store/modules/NavigationState";
import './index.scss'

function Home () {
    const [userName, setUserName] = useState('')
    const [, navigationActions] = useNavigationState()
    const [, authActions] = useAuthState()

    const doLogin = (e) => {
        e.preventDefault()
        authActions.doLogin({
            isLoggedIn: true,
            userName
        })
        navigationActions.setPath({ pathName: '/note-list'})
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