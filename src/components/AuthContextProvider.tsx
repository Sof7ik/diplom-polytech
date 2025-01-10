import React, { createContext, useContext, useEffect, useState } from 'react';

export interface IUserContext {
    id?: number | string;
    token?: string;
    role?: number;
    email?: string;
    fio?: string;
}

interface UserContextType {
    id?: number | string;
    token?: string;
    role?: number;
    email?: string;
    fio?: string;
    setUser: (user: IUserContext) => void;
    clearUser: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUserData] = useState<IUserContext>({});

    const setUser = (user: IUserContext) => {
        setUserData(user);
        localStorage.setItem('user', JSON.stringify(user));
    };

    const clearUser = () => {
        setUserData({});
        localStorage.removeItem('user');
    };

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUserData(JSON.parse(storedUser));
        }
    }, []);

    return (
        <UserContext.Provider value={{ ...user, setUser, clearUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
};


/** old */

/*
import React, {createContext, useState} from "react";

export interface IUserContext {
    id?: number | string;
    token?: string;
    role?: number;
    email?: string;
    fio?: string;
}

interface IAuthContext {
    authContextState: IUserContext;
    setAuthContextState: React.Dispatch<React.SetStateAction<IUserContext>>;
}

interface AuthContextProviderProps {
    children: React.ReactNode;
}

export default function AuthContextProvider({ children }: AuthContextProviderProps) {
    // console.log("AuthContextProvider.tsx");

    const fromStorage = localStorage.getItem("authContext");

    let authContextFromStorage: IUserContext;

    if (fromStorage) {
        authContextFromStorage = JSON.parse(fromStorage);
    }
    else {
        authContextFromStorage = {};
    }

    console.log("authContextFromStorage", authContextFromStorage);

    const [authContextState, setAuthContextState] = useState<IUserContext>(authContextFromStorage);
    const AuthContext = createContext<IAuthContext>({
        authContextState,
        setAuthContextState,
    });

    return (
        <AuthContext.Provider value={{ authContextState, setAuthContextState }}>
            {children}
        </AuthContext.Provider>
    );
}
 */