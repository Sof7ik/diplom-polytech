import React, {useState} from "react";
import {AuthContext, IUserContext} from "../context/auth.context.ts";

interface AuthContextProviderProps {
    children: React.ReactNode;
}

export default function AuthContextProvider({ children }: AuthContextProviderProps) {
    console.log("AuthContextProvider.tsx");

    const fromStorage = localStorage.getItem("authContext");

    let authContextFromStorage: IUserContext;

    if (fromStorage) {
        authContextFromStorage = JSON.parse(fromStorage);
    }
    else {
        authContextFromStorage = {};
    }

    // console.log("authContextFromStorage", authContextFromStorage);

    const [authContextState, setAuthContextState] = useState<IUserContext>(authContextFromStorage);

    return (
        <AuthContext.Provider value={{ authContextState, setAuthContextState }}>
            {children}
        </AuthContext.Provider>
    );
}