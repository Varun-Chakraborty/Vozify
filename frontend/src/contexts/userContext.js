import { createContext, useContext } from "react";

const userContext = createContext({user: null, setUser: ()=>{}});
export const UserContextProvider = userContext.Provider;
export const useUserContext = () => useContext(userContext);