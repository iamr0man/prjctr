import React, {useEffect, useReducer} from 'react';
import CreateNote from "../CreateNote";
import NoteDisplaying from "../NoteDisplaying";
import NoteList from "../NoteList";
import {formInitialState, formListReducer, noteInitialState, noteListReducer} from "../../store/reducers";
import {NoteListContext, useNoteState} from "../../store/modules/NoteState";
import {useFormState} from "../../store/modules/FormState";

function Main({ isCreateFormOpen }) {
    return (
        <div className="app">
            {
                isCreateFormOpen
                    ? <CreateNote />
                    : <NoteDisplaying />
            }
            <NoteList />
        </div>
    );
}

export const FormProvider = ({ children }) => {
    const [state, dispatch] = useReducer(formListReducer, formInitialState)

    return (
        <NoteListContext.Provider value={[state, dispatch]}>
            {children}
        </NoteListContext.Provider>
    )
}

export const NoteListProvider = ({ children }) => {
    const [state, dispatch] = useReducer(noteListReducer, noteInitialState)

    return (
        <NoteListContext.Provider value={[state, dispatch]}>
            {children}
        </NoteListContext.Provider>
    )
}

export const NoteApp = () => {
    const [state, action] = useNoteState()
    // const [formState] = useFormState()

    useEffect(() => {
        debugger
        action.initNoteList()
    }, [state, action])

    return (
        // <FormProvider>
            <NoteListProvider>
                <Main isCreateFormOpen={true}/>
            </NoteListProvider>
        // </FormProvider>
    )
}