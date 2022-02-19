import React, {useMemo} from 'react';
import ReturnButton from "./ReturnButton";
import Welcome from "./Welcome/";
import {useAuthState} from "../../store/modules/AuthState";
import {NOTE_LIST_PATH_NAME} from "../../constants";
import {useNavigationState} from "../../store/modules/NavigationState";

function Article () {
    const [navigationState, navigationAction] = useNavigationState()
    const [authState, authActions] = useAuthState()

    const showReturnBack = useMemo(() => {
        return authState.isLoggedIn && navigationState.router.pathName !== NOTE_LIST_PATH_NAME
    }, [navigationState])

    const showWelcome = useMemo(() => {
        return authState.isLoggedIn && navigationState.router.pathName === NOTE_LIST_PATH_NAME
    }, [navigationState])

    const goToNoteList = () => {
        navigationAction.setPath({ pathName: '/note-list'})
    }

    const doLogout = () => {
        authActions.doLogout()
        navigationAction.setPath({ pathName: '/'})
    }
    return (
        <>
            {showWelcome && <Welcome userName={userName} onLogout={doLogout}/>}
            {showReturnBack && <ReturnButton onReturnBack={goToNoteList} />}
        </>
    );
}

export default Article;