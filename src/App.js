import './App.scss';
import {useNoteState} from "./store/modules/NoteState";
import {useFormState} from "./store/modules/FormState";
import React, {useEffect } from "react";
import { getNoteList, saveNewList } from "./store/localStorage";
import CreateNote from "./components/CreateNote";
import NoteDisplaying from "./components/NoteDisplaying";
import NoteList from "./components/NoteList";
import {CREATE_FORM_MODE, VIEW_FORM_MODE} from "./constants";

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
            {formState.noteMode === CREATE_FORM_MODE && <CreateNote />}
            {formState.noteMode === VIEW_FORM_MODE && <NoteDisplaying />}
            <NoteList />
        </div>
    )
}

export default App;
