import {createContext} from "react";

export const AuthContext = createContext()

function ContextProvider({children}) {
    const data = {
        bananen: 'geel',
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default ContextProvider;