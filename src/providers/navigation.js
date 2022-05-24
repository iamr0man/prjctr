import React, {useReducer} from "react";
import {navigationInitialState, navigationReducer} from "../store/reducers/navigation";
import {NavigationContext} from "../store/modules/NavigationState";

export const NavigationProvider = ({ children }) => {
    const [state, dispatch] = useReducer(navigationReducer, navigationInitialState)

    return (
        <NavigationContext.Provider value={[state, dispatch]}>
            {children}
        </NavigationContext.Provider>
    )
}
