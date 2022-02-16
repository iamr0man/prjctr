import React, {useEffect, useMemo} from "react";
import { Switch, Route } from "react-router-dom";
import {Button} from "antd";
import './App.scss';
import {useNoteState} from "./store/modules/NoteState";
import { getNoteList, saveNewList } from "./store/localStorage";
import CreateNote from "./components/CreateNote";
import NoteDisplaying from "./components/NoteDisplaying";
import NoteList from "./components/NoteList";
import { history } from "./index";
import {useNavigationState} from "./store/modules/NavigationState";
import {NOTE_LIST_PATH_NAME} from "./constants";

function App() {
    const [state, actions] = useNoteState()
    const [navigationState, navigationAction] = useNavigationState()

    const historyPush = (payload) => {
        let newPath = `${payload.pathName}`
        if (payload.params) {
            const paramId = payload.params.id
            newPath += `${paramId ? `/${paramId}` : ''}`
        }

        history.push(newPath)
    }

    const isNeedShowReturnBack = useMemo(() => {
        return navigationState.router.pathName !== NOTE_LIST_PATH_NAME
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

    return (
        <div className="app">
            <Switch>
                <Route path="/form-note/create" component={CreateNote} />
                <Route path="/form-note/edit/:id" component={CreateNote} />
                <Route path="/note-details/:id" component={NoteDisplaying} />
                <Route path="/note-list" component={NoteList} />
            </Switch>
            {isNeedShowReturnBack && <Button
                className="app__return-back-button"
                type="primary"
                htmlType="button"
                onClick={() => navigationAction.setPath({ pathName: '/note-list'})}
            >
                Return to List
            </Button>}
        </div>
    )
}

export default App;
