import React, {useEffect } from "react";
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
import Article from "./components/Article";

function App() {
    const [state, actions] = useNoteState()
    const [navigationState] = useNavigationState()

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
                <Route exact path="/" component={Home} />
                <Route path="/form-note/create" component={CreateNote} />
                <Route path="/form-note/edit/:id" component={CreateNote} />
                <Route path="/note-details/:id" component={NoteDisplaying} />
                <Route path="/note-list" component={NoteList} />
            </Switch>
            <Article />
        </div>
    )
}

export default App;
