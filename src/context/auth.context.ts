import React, {createContext} from "react";

export interface IUserContext {
    id?: number | string;
    token?: string;
    role?: number;
    email?: string;
    fio?: string;
}

export interface IAuthContext {
    authContextState: IUserContext;
    setAuthContextState: React.Dispatch<React.SetStateAction<IUserContext>>;
}

export const AuthContext = createContext<IAuthContext | null>(null);