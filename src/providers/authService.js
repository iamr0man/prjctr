import React from "react";
import {AuthServiceContext} from "../services/auth";

import {useAuthState} from "../store/modules/AuthState";
import {useNavigationState} from "../store/modules/NavigationState";

const createAuthServiceProvider = (authActions, navigationActions) => {
    const login = (userName) => {
        authActions.login({
            isLoggedIn: true,
            userName
        })
        navigationActions.setPath({ pathName: '/note-list'})
    }

    const logout = () => {
        authActions.logout()
        navigationActions.setPath({ pathName: '/'})
    }

    return {
        login,
        logout,
    }
}

export const AuthServiceProvider = ({ children }) => {
    const [, authActions] = useAuthState()
    const [, navigationActions] = useNavigationState()

    const actions = createAuthServiceProvider(authActions, navigationActions)

    return (
      <AuthServiceContext.Provider value={actions}>
          {children}
      </AuthServiceContext.Provider>
    )
}
