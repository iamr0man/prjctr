import React, {useContext, useState} from 'react';

import { formInitialState } from '../reducers/form'
import {toggleCreateForm, changeNoteTitle, changeNoteContent, resetNote, setTouchedFlag, changeNote} from '../actions'

export const FormContext = React.createContext([formInitialState, () => undefined])

export const useFormState = () => {
    const [state, dispatch] = useContext(FormContext)
    const [actions] = useState(() => ({
        toggleCreateForm: toggleCreateForm(dispatch),
        changeNote: changeNote(dispatch),
        changeNoteTitle: changeNoteTitle(dispatch),
        changeNoteContent: changeNoteContent(dispatch),
        setTouchedFlag: setTouchedFlag(dispatch),
        resetNote: resetNote(dispatch),
    }))
    return [state, actions];
}