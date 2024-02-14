import { ReactNode, createContext, useState, Dispatch, SetStateAction, useContext } from 'react';

interface AdminLoginContextProps {
    adminLogin?: boolean;
    setAdminLogin?: Dispatch<SetStateAction<boolean>>;
    children?: ReactNode;
}

export const AdminLoginContext = createContext<AdminLoginContextProps | undefined>(undefined);


export const AdminLoginProvider = ({ children }: AdminLoginContextProps) => {
    const [adminLogin, setAdminLogin] = useState<boolean>(false);

    return (
        <AdminLoginContext.Provider value={{ adminLogin, setAdminLogin }}>
            {children}
        </AdminLoginContext.Provider>
    );
};

export const UseAdminLoginContext = (): AdminLoginContextProps => {
    const context = useContext(AdminLoginContext);
    if (!context) {
      throw new Error('useProductListContext must be used within a ProductListProvider');
    }
    return context;
  };
  



  

  
