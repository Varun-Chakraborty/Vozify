import { useState } from "react";
import Login from "../components/login";
import Register from "../components/register";
import Button from "../components/button";

export default function Auth() {
    const [login, setIfLogin] = useState(true);
    return (
        <div className="h-full flex items-center justify-center dark:text-white dark:bg-black">
            <div className="shadow-lg rounded-lg backdrop:opacity-45 flex relative gap-4 items-center h-72 aspect-video">
                <div className="h-full w-full flex">
                    <div className="p-3 h-full w-1/2 text-center rounded-lg flex flex-col justify-around font-serif bg-slate-500 dark:bg-slate-200 text-white dark:text-black">
                        <h2 className="text-2xl font-bold">Welcome Here</h2>
                        <p>Just put in some of your details, so we can get to know about you, and remember you next time you come back</p>
                        <div className="flex flex-col items-center">
                            <p>Already a member?</p>
                            <Button
                                className="hover:text-black dark:hover:text-white cursor-pointer"
                                onClick={() => setIfLogin(true)}> Login </Button>
                        </div>
                    </div>
                    <div className="p-3 h-full w-1/2 text-center rounded-lg flex flex-col justify-around font-serif bg-slate-500 dark:bg-slate-200 text-white dark:text-black">
                        <h2 className="text-2xl font-bold">Welcome Back</h2>
                        <p>Just put in some of your details, to help us get to know who you are</p>
                        <div className="flex flex-col items-center">
                            <p>New member here?</p>
                            <Button
                                className="hover:text-black dark:hover:text-white cursor-pointer"
                                onClick={() => setIfLogin(false)}> Register </Button>
                        </div>
                    </div>
                </div>
                <div className={"h-full w-1/2 p-3 rounded-lg absolute bg-white dark:bg-slate-900 flex items-center justify-center transition-transform "
                    + (login ? " translate-x-0 " : " translate-x-full ")}>
                    {login ? <Login /> : <Register />}
                </div>
            </div>
        </div>
    );
}