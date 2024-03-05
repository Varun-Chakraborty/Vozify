import { useMessageContext } from "../contexts/messageContext";

export default function Message() {
    const { messages } = useMessageContext();
    return (
        <div className="absolute top-0 right-0">
            
        </div>
    );
}