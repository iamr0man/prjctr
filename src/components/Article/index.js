import React, {useMemo} from 'react';
import ReturnButton from "./ReturnButton";
import Welcome from "./Welcome/";
import {useAuthState} from "../../store/modules/AuthState";
import {NOTE_LIST_PATH_NAME} from "../../constants";
import {useNavigationState} from "../../store/modules/NavigationState";
import {useNoteService} from "../../services/note";

function Article () {
    const [navigationState, navigationAction] = useNavigationState()
    const [authState] = useAuthState()
    const noteService = useNoteService()

    const showReturnBack = useMemo(() => {
        return authState.isLoggedIn && navigationState.router.pathName !== NOTE_LIST_PATH_NAME
    }, [authState, navigationState])

    const showWelcome = useMemo(() => {
        return authState.isLoggedIn && navigationState.router.pathName === NOTE_LIST_PATH_NAME
    }, [authState, navigationState])

    const goToNoteList = () => {
        navigationAction.setPath({ pathName: '/note-list'})
    }

    return (
        <>
            {showWelcome && <Welcome userName={authState.userName} onLogout={noteService.doLogout}/>}
            {showReturnBack && <ReturnButton onReturnBack={goToNoteList} />}
        </>
    );
}

export default Article;
