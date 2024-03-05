import { IoMdClose } from "react-icons/io"
import { useMessageContext } from "../contexts/messageContext";
export default function Message({ name, isPositive }) {
    const timer = setTimeout(removeTheNotification, 2000);
    const { setMessages } = useMessageContext();
    function removeTheNotification() {
        setMessages(messages => {
            messages.pop();
            return [...messages];
        });
    }
    return (
        <div className="w-96 bg-white rounded-xl px-2 border">
            <div className="flex items-center justify-between">
                <div className="p-2">
                    {name}
                </div>
                <IoMdClose onClick={() => {
                    removeTheNotification();
                    clearTimeout(timer);
                }} className="cursor-pointer" />
            </div>
            <div className={"h-1 animate-shrink " + (isPositive ? " bg-green-600 " : " bg-red-600 ")}>

            </div>
        </div>
    );
}