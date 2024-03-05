import { useMessageContext } from "../contexts/messageContext";
import Message from "./message";

export default function MessageContainer() {
    const { messages } = useMessageContext();
    console.log(messages);
    return (
        <>
            {
                messages.length>0 && <div className="absolute top-24 right-4 p-3 space-y-3">
                    {messages.map(message => (
                        <Message key={message.message} name={message.message} isPositive={message.isPositive} />
                    ))}
                </div>
            }
        </>
    );
}