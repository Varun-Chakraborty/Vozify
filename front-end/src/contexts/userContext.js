import { createContext, useContext } from "react";

const userContext = createContext(null);
export const UserContextProvider = userContext.Provider;
export const useUserContext = () => useContext(userContext);