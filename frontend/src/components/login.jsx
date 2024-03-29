import { useState } from "react";
import Button from "./button";
import { useUserContext } from "../contexts/userContext";
import axios from "axios"; // Import Axios
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export default function Login() {
    const showToastSuccessMessage = () => {
        toast.success('Logged In', {
            position: "top-right",
        });
    }
    const showToastFailMessage = (message) => {
        toast.error(message, {
            position: "top-right"
        });
    }
    const [data, setData] = useState({
        username: "",
        password: ""
    });
    const { setUser } = useUserContext();
    const url = 'http://localhost:3000/auth/login';
    function handleInputFieldChange(evnt) {
        setData({ ...data, [evnt.currentTarget.name]: evnt.currentTarget.value });
    }

    async function handleSubmit(evnt) {
        evnt.preventDefault();

        try {
            const response = await axios.post(url, data); // Send POST request using Axios
            if (response) {
                console.log('success');
                showToastSuccessMessage()
            }
            // Handle response
            console.log("Response:", response.data); // Log response data
        } catch (error) {
            // Handle error
            console.error("Error:", error);
            showToastFailMessage("no user found with this credentials");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3">

            <h2 className="font-bold text-xl uppercase font-serif">Login</h2>
            <input
                onChange={handleInputFieldChange}
                className="border p-1 rounded-lg outline-none bg-inherit"
                type="text" name="username" id="username" required autoComplete="username" placeholder="Username" />
            <input
                onChange={handleInputFieldChange}
                className="border p-1 rounded-lg outline-none bg-inherit"
                type="password" name="password" id="password" required autoComplete="current-password" placeholder="Password" />
            <div className="flex gap-2">
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember Me</label>
            </div>
            <Button>
                <input
                    className="outline-none cursor-pointer"
                    type="submit" value="Proceed" />
            </Button>
        </form>
    );
}
