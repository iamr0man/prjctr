import React, {useEffect, useMemo} from "react";
import { Switch, Route } from "react-router-dom";
import './App.scss';
import {useNoteState} from "./store/modules/NoteState";
import { getNoteList, saveNewList } from "./store/localStorage";
import Home from "./components/Home";
import CreateNote from "./components/CreateNote";
import NoteDisplaying from "./components/NoteDisplaying";
import NoteList from "./components/NoteList";
import { historyPush } from "./navigation/index";
import {useNavigationState} from "./store/modules/NavigationState";
import {NOTE_LIST_PATH_NAME} from "./constants";
import {useAuthState} from "./store/modules/AuthState";
import Article from "./components/Article";

function App() {
    const [state, actions] = useNoteState()
    const [navigationState, navigationAction] = useNavigationState()
    const [authState, authActions] = useAuthState()

    const isShowReturnBack = useMemo(() => {
        return authState.isLoggedIn && navigationState.router.pathName !== NOTE_LIST_PATH_NAME
    }, [navigationState])

    const isShowWelcome = useMemo(() => {
        return authState.isLoggedIn && navigationState.router.pathName === NOTE_LIST_PATH_NAME
    }, [navigationState])

    useEffect(() => {
        const data = getNoteList()
        actions.initNoteList(data)
    }, [])

    useEffect(() => {
        saveNewList(state.notes)
    }, [state.notes])

    useEffect(() => {
        historyPush(navigationState.router)
    }, [navigationState])

    const goToNoteList = () => {
        navigationAction.setPath({ pathName: '/note-list'})
    }

    const doLogout = () => {
        authActions.doLogout()
        navigationAction.setPath({ pathName: '/'})
    }

    return (
        <div className="app">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/form-note/create" component={CreateNote} />
                <Route path="/form-note/edit/:id" component={CreateNote} />
                <Route path="/note-details/:id" component={NoteDisplaying} />
                <Route path="/note-list" component={NoteList} />
            </Switch>
            <Article
                showWelcome={isShowWelcome}
                showReturnBack={isShowReturnBack}
                userName={authState.userName}
                onLogout={doLogout}
                onReturnBack={goToNoteList}
            />
        </div>
    )
}

export default App;
