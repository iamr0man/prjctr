import React from 'react';
import ReturnButton from "./ReturnButton";
import Welcome from "./Welcome/";
import {useAuthState} from "../../store/modules/AuthState";
import {NOTE_LIST_PATH_NAME} from "../../constants";
import {useNavigationState} from "../../store/modules/NavigationState";
import {useAuthService} from "../../services/auth";


function Article () {
    const [navigationState, navigationAction] = useNavigationState()
    const [authState] = useAuthState()
    const authService = useAuthService()

    const showReturnBack = authState.isLoggedIn && navigationState.router.pathName !== NOTE_LIST_PATH_NAME

    const showWelcome = authState.isLoggedIn && navigationState.router.pathName === NOTE_LIST_PATH_NAME

    const goToNoteList = () => {
        navigationAction.setPath({ pathName: '/note-list'})
    }

    return (
        <>
            {showWelcome && <Welcome userName={authState.userName} onLogout={authService.logout}/>}
            {showReturnBack && <ReturnButton onReturnBack={goToNoteList} />}
        </>
    );
}

export default Article;
