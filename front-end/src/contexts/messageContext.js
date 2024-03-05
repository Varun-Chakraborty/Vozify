import { createContext, useContext } from "react";

const messageContext = createContext({
    messageDetails: {
        message: '',
        isPositive: false
    }, setMessage: () => { }
});
export const messageContextProvider = messageContext.Provider;

export const useMessageContext = () => useContext(messageContext);