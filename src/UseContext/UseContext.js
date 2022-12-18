import { createContext, useContext, useEffect, useState } from "react";

export const appContext = createContext();

export function useAppContext() {
    return useContext(appContext);
}

export function AppProvider({ children }) {
    const [name, setName] = useState("");

    useEffect(() => {
        setName("Brian");
    }, []);

    const appContextValue = {
        name,
        setName,
    };

    return (
        <appContext.Provider value={appContextValue}>
            {children}
        </appContext.Provider>
    );
}
