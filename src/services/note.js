import React, {useContext} from 'react';

export const NoteServiceContext = React.createContext()

export const useNoteService = () => {
    const context = useContext(NoteServiceContext)

    if (!context) {
        throw Error('You can\'t use note service context without Provider')
    }

    return context
}
