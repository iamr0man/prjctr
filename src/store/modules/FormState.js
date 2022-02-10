import React, {useContext, useState} from 'react';

import { formInitialState } from '../reducers/form'
import {toggleCreateForm, changeNote, resetNote, setTouchedFlag} from '../actions'

export const FormContext = React.createContext([formInitialState, () => undefined])

export const useFormState = () => {
    const [state, dispatch] = useContext(FormContext)
    const [actions] = useState(() => ({
        toggleCreateForm: toggleCreateForm(dispatch),
        changeNote: changeNote(dispatch),
        setTouchedFlag: setTouchedFlag(dispatch),
        resetNote: resetNote(dispatch),
    }))
    return [state, actions];
}