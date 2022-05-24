import React, {useReducer} from "react";
import {authInitialState, authReducer} from "../store/reducers/auth";
import {AuthContext} from "../store/modules/AuthState";

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, authInitialState)

    return (
        <AuthContext.Provider value={[state, dispatch]}>
            {children}
        </AuthContext.Provider>
    )
}
