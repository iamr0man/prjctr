import React, {useState} from 'react';
import HomeView from "./HomeView";
import {useNoteService} from "../../services/note";
import './index.scss'

function Home () {
    const [userName, setUserName] = useState('')
    const noteService = useNoteService()

    const doLogin = (e) => {
        e.preventDefault()
        noteService.doLogin(userName)
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
