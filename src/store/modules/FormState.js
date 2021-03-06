import React, {useContext, useState} from 'react';

import { formInitialState } from '../reducers/form'
import { changeNoteTitle, changeNoteContent, resetNote, setTouchedFlag, changeNote} from '../actions/form'

export const FormContext = React.createContext([formInitialState, () => undefined])

export const useFormState = () => {
    const [state, dispatch] = useContext(FormContext)
    const [actions] = useState(() => ({
        changeNote: changeNote(dispatch),
        changeNoteTitle: changeNoteTitle(dispatch),
        changeNoteContent: changeNoteContent(dispatch),
        setTouchedFlag: setTouchedFlag(dispatch),
        resetNote: resetNote(dispatch),
    }))
    return [state, actions];
}
