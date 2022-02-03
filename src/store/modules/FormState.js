import React, { useContext, useState } from 'react';

import { formInitialState } from '../reducers/'
import { toggleCreateForm } from '../actions'

export const NoteListContext = React.createContext([formInitialState, () => undefined])

export const useFormState = () => {
    const [state, dispatch] = useContext(NoteListContext)
    const [actions] = useState(() => ({
        toggleCreateForm: toggleCreateForm(dispatch)
    }))
    return [state, actions];
}