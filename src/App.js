import './App.scss';
import {useNoteState} from "./store/modules/NoteState";
import {useFormState} from "./store/modules/FormState";
import React, {useEffect } from "react";
import { getNoteList, saveNewList } from "./store/localStorage";
import CreateNote from "./components/CreateNote";
import NoteDisplaying from "./components/NoteDisplaying";
import NoteList from "./components/NoteList";
import {CREATE, VIEW} from "./constants";

function App() {
    const [state, actions] = useNoteState()
    const [formState] = useFormState()

    useEffect(() => {
        const data = getNoteList()
        actions.initNoteList(data)
    }, [])

    useEffect(() => {
        saveNewList(state.notes)
    }, [state.notes])

    return (
        <div className="app">
            {formState.noteMode === CREATE && <CreateNote />}
            {formState.noteMode === VIEW && <NoteDisplaying />}
            <NoteList />
        </div>
    )
}

export default App;
