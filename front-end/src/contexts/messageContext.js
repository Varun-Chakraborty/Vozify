import { createContext, useContext } from "react";

const messageContext = createContext({
    messages: [{
        message: '',
        isPositive: false
    }], setMessages: () => { }
});
export const MessageContextProvider = messageContext.Provider;

export const useMessageContext = () => useContext(messageContext);