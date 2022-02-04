import React, {useContext, useState} from 'react';

import { formInitialState } from '../reducers/form'
import { toggleCreateForm, selectNote } from '../actions'

export const FormContext = React.createContext([formInitialState, () => undefined])

export const useFormState = () => {
    const [state, dispatch] = useContext(FormContext)
    const [actions] = useState(() => ({
        toggleCreateForm: toggleCreateForm(dispatch),
        selectNote: selectNote(dispatch),
    }))
    return [state, actions];
}