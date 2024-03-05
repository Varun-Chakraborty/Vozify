import { useState } from "react";
import Button from "./button";
import axios from "axios";

export default function Register() {
    const [data, setData] = useState({
        username: "", password: ""
    });
    function handleInputFieldChange(evnt) {
        setData({ ...data, [evnt.currentTarget.name]: evnt.currentTarget.value });
    }
    async function handleSubmit() {
        axios('http:localhost:3000/auth/register')
    }
    return (
        <form
            onClick={handleSubmit}
            className="flex flex-col items-center gap-3"
            action="" method="post">
            <h2 className="font-bold text-xl uppercase font-serif">Register</h2>
            <input
                onChange={handleInputFieldChange}
                className="border dark:border-gray-600 p-1 rounded-lg outline-none bg-inherit"
                type="text" name="username" id="username" required autoComplete="username" placeholder="Username" />
            <input
                onChange={handleInputFieldChange}
                className="border dark:border-gray-600 p-1 rounded-lg outline-none bg-inherit"
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