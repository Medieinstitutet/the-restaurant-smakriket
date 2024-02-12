import React, { ReactNode, createContext, useState, Dispatch, SetStateAction } from 'react';

interface AdminLoginContextProps {
    adminLogin: boolean;
    setAdminLogin: Dispatch<SetStateAction<boolean>>;
}

export const AdminLoginContext = createContext<AdminLoginContextProps | undefined>(undefined);

interface AdminLoginProviderProps {
    children?: ReactNode;
}

export const AdminLoginProvider = ({ children }: AdminLoginProviderProps) => {
    const [adminLogin, setAdminLogin] = useState<boolean>(false);

    return (
        <AdminLoginContext.Provider value={{ adminLogin, setAdminLogin }}>
            {children}
        </AdminLoginContext.Provider>
    );
};
