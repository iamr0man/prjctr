import React, {useContext, useState} from 'react';

import { navigationInitialState } from '../reducers/navigation'
import { setPath } from '../actions'

export const NavigationContext = React.createContext([navigationInitialState, () => undefined])

export const useNavigationState = () => {
    const [state, dispatch] = useContext(NavigationContext)
    const [actions] = useState(() => ({
        setPath: setPath(dispatch)
    }))
    return [state, actions];
}