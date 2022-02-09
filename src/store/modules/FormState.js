import React, {useContext, useState} from 'react';

import { formInitialState } from '../reducers/form'
import {toggleCreateForm, changeNote, resetNote} from '../actions'

export const FormContext = React.createContext([formInitialState, () => undefined])

export const useFormState = () => {
    const [state, dispatch] = useContext(FormContext)
    const [actions] = useState(() => ({
        toggleCreateForm: toggleCreateForm(dispatch),
        changeNote: changeNote(dispatch),
        resetNote: resetNote(dispatch),
    }))
    return [state, actions];
}