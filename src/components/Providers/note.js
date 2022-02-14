import React, {useReducer} from "react";
import {noteInitialState, noteListReducer} from "../../store/reducers/note";
import {NoteListContext} from "../../store/modules/NoteState";

export const NoteListProvider = ({ children }) => {
    const [state, dispatch] = useReducer(noteListReducer, noteInitialState)

    return (
        <NoteListContext.Provider value={[state, dispatch]}>
            {children}
        </NoteListContext.Provider>
    )
}