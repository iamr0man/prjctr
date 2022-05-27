import React, { useContext, useState } from 'react';

import { authInitialState } from '../reducers/auth'
import { login, logout } from '../actions/auth'

export const AuthContext = React.createContext([authInitialState, () => undefined])

export const useAuthState = () => {
    const [state, dispatch] = useContext(AuthContext)
    const [actions] = useState(() => ({
        login: login(dispatch),
        logout: logout(dispatch)
    }))
    return [state, actions]
}
