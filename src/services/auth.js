import React, {useContext} from 'react';

export const AuthServiceContext = React.createContext()

export const useAuthService = () => {
    const context = useContext(AuthServiceContext)

    if (!context) {
        throw Error('You can\'t use auth service context without Provider')
    }

    return context
}
