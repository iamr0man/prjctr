import React, { useContext, useState } from 'react';

import { authInitialState } from '../reducers/auth'
import { doLogin, doLogout } from '../actions'

export const AuthContext = React.createContext([authInitialState, () => undefined])

export const useAuthState = () => {
    const [state, dispatch] = useContext(AuthContext)
    const [actions] = useState(() => ({
        doLogin: doLogin(dispatch),
        doLogout: doLogout(dispatch)
    }))
    return [state, actions]
}