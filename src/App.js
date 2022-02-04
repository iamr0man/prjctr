import './App.scss';
import {useNoteState} from "./store/modules/NoteState";
import {useFormState} from "./store/modules/FormState";
import React, {useEffect} from "react";
import CreateNote from "./components/CreateNote";
import NoteDisplaying from "./components/NoteDisplaying";
import NoteList from "./components/NoteList";

function App() {
    const [_, actions] = useNoteState()
    const [formState] = useFormState()

    useEffect(() => {
        actions.initNoteList()
    }, [])

    return (
        <div className="app">
            {
                formState.isCreateFormOpen
                    ? <CreateNote />
                    : <NoteDisplaying />
            }
            <NoteList />
        </div>
    )
}

export default App;
